import Collaborator from '../models/Collaborator';

class UserController {
  async store(req, res) {
    const { id, name, height, weight } = await Collaborator.create(req.body)

    return res.json({ id, name, height, weight })
  }

  async update() {

  }

  async delete() {

  }
}

export default new UserController()