var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from '../database/models/User.js';
export class UserService {
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User.create(data);
            return user.toJSON();
        });
    }
    getUser(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User.findOne({ where: query });
            return user ? user.toJSON() : null;
        });
    }
    getAllUsers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User.findAll({ where: query });
            return users.map(user => user.toJSON());
        });
    }
    updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User.findByPk(id);
            if (user) {
                yield user.update(data);
                return user.toJSON();
            }
            return null;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield User.destroy({ where: { id } });
            return result > 0;
        });
    }
}
//# sourceMappingURL=User.js.map