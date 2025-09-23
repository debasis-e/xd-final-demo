export default interface Repository<T, K> {
  read(): Promise<T[] | undefined>;
  readById(id: K): Promise<T | undefined>;
  create(entity: T): Promise<T | undefined>;
  update(entity: T): Promise<T | undefined>;
  delete(entity: T): T;
}
