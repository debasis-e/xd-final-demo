import Repository from '../repository';
import { UserAttributes } from '../models/User.model';
const { User } = require('../modelDefinitions');
import Tracer from "../../tracer";

class UserRepository implements Repository<UserAttributes, string> {
  private tracer
  constructor() {
    this.tracer = Tracer
  }
  // this.tracer = Tracer
  async read(): Promise<UserAttributes[] | undefined> {
    const span = this.tracer.startSpan("UserRepository.findById");
    return this.tracer.withSpan(span, async () => {

      // throw new Error('Method not implemented.');
      const response = await User.findAll();
      span.setAttribute("db.row_count", response.rowCount ?? 0);
      span.end();
      return response;
    });
  }
  readById(id: string): Promise<UserAttributes | undefined> {
    throw new Error('Method not implemented.');
  }
  update(entity: UserAttributes): Promise<UserAttributes | undefined> {
    throw new Error('Method not implemented.');
  }
  async create(entity: UserAttributes): Promise<UserAttributes | undefined> {
    throw new Error('Method not implemented.');
  }
  delete(entity: UserAttributes): UserAttributes {
    throw new Error('Method not implemented.');
  }


}

export default UserRepository;
