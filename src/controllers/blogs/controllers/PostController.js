import BlogModel from '../../../models/blogSchema.js';

export class PostController {
  static async postBlog(req, res) {
    // Si ya llegamos hasta acá significa que la información -
    // - que nos manda el FrontEnd está validada.
    const { body } = req.body;

    const newBlog = new BlogModel({
      title: body.title,
      imageUrl: body.imageUrl,
      content: body.content,
    });

    try {
      await newBlog.save();

      res.status(201).json({
        data: null,
        message: 'Blog guardado correctamente',
      });
    } catch (e) {
      console.error(e);

      res.status(500).json({
        data: null,
        message: 'Ocurrió un error al guardar el blog',
      });
    }
  }
}
