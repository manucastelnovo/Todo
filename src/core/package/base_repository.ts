
export class BaseRepository {
  async callDataSource<T>(callback: () => Promise<T>): Promise<T> {
    try {
      return await callback();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`${this.constructor.name} error`);
    }
  }
}
