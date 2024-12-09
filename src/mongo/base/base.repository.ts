import { Model, Document, FilterQuery, UpdateQuery } from 'mongoose';
import { HttpException, HttpStatus } from '@nestjs/common';

export class BaseRepository<T extends Document> {
  private readonly entityName: string;

  constructor(protected readonly model: Model<T>) {
    this.entityName = model.modelName || 'Entity';
  }

  /**
   * Create a new document.
   * @param createData - Data to create a new document.
   * @returns Created document.
   */
  async create(createData: Partial<T>): Promise<T> {
    try {
      const createdDocument = new this.model(createData);
      return await createdDocument.save();
    } catch (error) {
      throw new HttpException(
        `Failed to create ${this.entityName}: ${error.message}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  /**
   * Find one document by query.
   * @param filter - MongoDB query filter.
   * @returns Found document or null.
   */
  async findOne(filter: FilterQuery<T>): Promise<T | null> {
    return await this.model.findOne(filter).exec();
  }

  /**
   * Delete a document by ID.
   * @param id - Document ID.
   * @returns Deleted document or null.
   */
  async delete(id: string): Promise<T | null> {
    return await this.model.findByIdAndDelete(id).exec();
  }

  /**
   * Find one document by query or throw if not found.
   * @param filter - MongoDB query filter.
   * @returns Found document.
   */
  async findOneOrThrow(
    filter: FilterQuery<T>,
    errorMessage?: string,
  ): Promise<T> {
    const document = await this.model.findOne(filter).exec();
    if (!document) {
      throw new HttpException(
        errorMessage || `${this.entityName} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return document;
  }

  /**
   * Find a document by ID or throw if not found.
   * @param id - Document ID.
   * @returns Found document.
   */
  async findByIdOrThrow(id: string, errorMessage?: string): Promise<T> {
    const document = await this.model.findById(id).exec();
    if (!document) {
      throw new HttpException(
        errorMessage || `${this.entityName} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return document;
  }

  /**
   * Update a document by ID or throw if not found.
   * @param id - Document ID.
   * @param updateData - Data to update.
   * @returns Updated document.
   */
  async updateOrThrow(
    id: string,
    updateData: UpdateQuery<T>,
    errorMessage?: string,
  ): Promise<T> {
    try {
      const document = await this.model
        .findByIdAndUpdate(id, updateData, { new: true })
        .exec();
      if (!document) {
        throw new HttpException(
          errorMessage || `${this.entityName} not found`,
          HttpStatus.NOT_FOUND,
        );
      }
      return document;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new Error(`Failed to update ${this.entityName}: ${error.message}`);
    }
  }

  /**
   * Delete a document by ID or throw if not found.
   * @param id - Document ID.
   * @returns Deleted document.
   */
  async deleteOrThrow(id: string, errorMessage?: string): Promise<T> {
    try {
      const document = await this.model.findByIdAndDelete(id).exec();
      if (!document) {
        throw new HttpException(
          errorMessage || `${this.entityName} not found`,
          HttpStatus.NOT_FOUND,
        );
      }
      return document;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        `Failed to delete ${this.entityName}: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  /**
   * Find all documents by query.
   * @param filter - MongoDB query filter.
   * @returns Array of documents.
   */
  async findAll(filter: FilterQuery<T> = {}): Promise<T[]> {
    try {
      return await this.model.find(filter).exec();
    } catch (error) {
      throw new HttpException(
        `Failed to fetch ${this.entityName}s: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  /**
   * Count documents by query.
   * @param filter - MongoDB query filter.
   * @returns Count of documents.
   */
  async count(filter: FilterQuery<T> = {}): Promise<number> {
    try {
      return await this.model.countDocuments(filter).exec();
    } catch (error) {
      throw new HttpException(
        `Failed to count ${this.entityName}s: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
