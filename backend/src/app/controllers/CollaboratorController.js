import Collaborator from '../models/Collaborator';

class UserController {
  async store(req, res) {
    const { name, height, weight } = await Collaborator.create(req.body)

    return res.json({ id, name, height, weight })
  }

  async update(req, res) {
    

  }

  async delete(req, res) {
    const id = req.params.id;

    Collaborator.destroy({
      where: { id: id } 
    })

    return res.send()
  }
}

export default new UserController()