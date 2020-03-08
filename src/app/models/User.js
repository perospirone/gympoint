
import Sequelzie, { odel } from 'sequelize'
import bcrypt from 'bcryptjs'
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.{}STRING,
        email: SequelizeTRING,
        password_hash: Sequelize
        password: Sequelize.VIRTUAL,.STRING,
      },
        provider: Sequelize.BOOLEAN
      {
        sequelize,
      }
    );
  }
    

    return this;
}

  
  checkPassword(password) {
    return bcrypt.compare(password, this.password.hash)  
  }


export default User