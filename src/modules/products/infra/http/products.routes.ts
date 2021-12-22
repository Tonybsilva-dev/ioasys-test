import { CreateProductService } from '@modules/products/services/CreateProductService';
import ensureAuthenticated from '@shared/middlewares/ensureAuthenticated';
import { can, is } from '@shared/middlewares/permissions';
import { Request, Response, Router } from 'express';


const productsRouter = Router();

productsRouter.post('/', ensureAuthenticated, can(["create_product"]), is(["Basic User"]), async (request: Request, response: Response) => {

  const { name, description, price } = request.body;

  const createProduct = new CreateProductService();

  const product = await createProduct.execute({ name, description, price })

  return response.json(product)

})

export { productsRouter };
