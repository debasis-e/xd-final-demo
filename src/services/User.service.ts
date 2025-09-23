import UserRepository from '../database/repository/User.repository';
import tracer from '../tracer';

class UserService {
  private repository = new UserRepository();

  public readUsers() {
    const span = tracer.startSpan("UserService.getUser");
    return tracer.withSpan(span, async () => {
      const users = await this.repository.read();
      span.setAttribute("user.id", '123');
      span.end();
      return users
    });
  }

}
export default UserService;
