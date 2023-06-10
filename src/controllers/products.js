import { config } from "../logic/config";
import handleReceive from "../rabbit/Receive";
import sendMessageJson from "../rabbit/Send";

export const getProducts = async (req, res) => {
  // Conetction rabit
  handleReceive(`${config.RABBIT_HOST}`, "python-java", async (res) => {
    console.log(productos, "🎀 ");
    const productos = String.fromCharCode(...res);
    await res.json(productos).productos;
  });
  sendMessageJson(
    `${config.RABBIT_HOST}`,
    "python-java",
    {
      req: "getProducts",
    },
    (response) => {
      res.json({ status: response });
      console.log("Enviado correctamente al python");
    }
  );
  // res.json(productos);
};

export const handleBuyProducts = async (req, res) => {
  // Conetction rabit
  console.log("resibiendo 🐈 ", req.body);

  /**
   * Enviando a rabbit
   */

  handleReceive(`${config.RABBIT_HOST}`, "python-js", async (response) => {
    await res.json({ status: 200, payload: response });
  });

  sendMessageJson(
    `${config.RABBIT_HOST}`,
    "js-python",
    {
      ...req.body,
    },
    (response) => {
      // res.json({ status: response });
      console.log("Enviado correctamente al python");
    }
  );

  // sendMessageJson(req.body, () => {
  //   res.json({ status: 200 });
  // });
};

// export const productos = [
//   {
//     id: "1512",
//     producto: "aceite",
//     cantidad: "3",
//     precio: "8.2",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562541-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion: "Este producto es un aceite de cocina de alta calidad.",
//   },
//   {
//     id: "4526",
//     producto: "carne",
//     cantidad: "3",
//     precio: "9.8",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562542-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto es carne fresca y jugosa, ideal para preparar deliciosas comidas.",
//   },
//   {
//     id: "7753",
//     producto: "pescado",
//     cantidad: "2",
//     precio: "6.4",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562543-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto es pescado fresco del mar, rico en omega-3 y perfecto para recetas saludables.",
//   },
//   {
//     id: "2798",
//     producto: "zanahorias",
//     cantidad: "6",
//     precio: "1.1",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562544-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto son zanahorias frescas y crujientes, ideales para ensaladas y guisos.",
//   },
//   {
//     id: "6185",
//     producto: "cebollas",
//     cantidad: "4",
//     precio: "0.7",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562545-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto son cebollas dulces y aromáticas, perfectas para dar sabor a tus platos favoritos.",
//   },
//   {
//     id: "3621",
//     producto: "papas",
//     cantidad: "7",
//     precio: "0.8",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562546-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto son papas frescas y versátiles, ideales para preparar deliciosas guarniciones.",
//   },
//   {
//     id: "9402",
//     producto: "tomates",
//     cantidad: "5",
//     precio: "1.5",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562547-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto son tomates jugosos y sabrosos, ideales para ensaladas y salsas caseras.",
//   },
//   {
//     id: "1269",
//     producto: "lechuga",
//     cantidad: "2",
//     precio: "1.2",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562548-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto es lechuga fresca y crujiente, perfecta para ensaladas saludables.",
//   },
//   {
//     id: "5703",
//     producto: "manzanas",
//     cantidad: "8",
//     precio: "2.3",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562549-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto son manzanas jugosas y dulces, ideales como merienda o para preparar postres.",
//   },
//   {
//     id: "8532",
//     producto: "naranjas",
//     cantidad: "9",
//     precio: "2.1",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562550-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto son naranjas frescas y llenas de vitamina C, perfectas para hacer jugos naturales.",
//   },
//   {
//     id: "7124",
//     producto: "plátanos",
//     cantidad: "6",
//     precio: "1.8",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562551-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto son plátanos maduros y llenos de energía, ideales como snack o para hacer postres.",
//   },
//   {
//     id: "4136",
//     producto: "fresas",
//     cantidad: "3",
//     precio: "4.5",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562552-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto son fresas frescas y dulces, perfectas para disfrutar solas o en postres.",
//   },
//   {
//     id: "9468",
//     producto: "uvas",
//     cantidad: "4",
//     precio: "3.7",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562553-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto son uvas jugosas y llenas de sabor, ideales como snack o para preparar ensaladas de frutas.",
//   },
//   {
//     id: "3197",
//     producto: "sandía",
//     cantidad: "1",
//     precio: "5.6",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562554-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto es una sandía jugosa y refrescante, perfecta para disfrutar en días calurosos.",
//   },
//   {
//     id: "6325",
//     producto: "pimentón",
//     cantidad: "4",
//     precio: "1.2",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562555-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto es pimentón fresco y colorido, ideal para dar sabor y color a tus platos favoritos.",
//   },
//   {
//     id: "2785",
//     producto: "calabacín",
//     cantidad: "3",
//     precio: "0.9",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562556-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto es calabacín fresco y versátil, perfecto para preparar guisos y salteados.",
//   },
//   {
//     id: "5721",
//     producto: "pepino",
//     cantidad: "5",
//     precio: "0.8",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562557-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto es pepino fresco y refrescante, ideal para ensaladas y aguas saborizadas.",
//   },
//   {
//     id: "9174",
//     producto: "limones",
//     cantidad: "7",
//     precio: "1.6",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562558-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto son limones ácidos y aromáticos, perfectos para aderezos y bebidas refrescantes.",
//   },
//   {
//     id: "1042",
//     producto: "mango",
//     cantidad: "4",
//     precio: "3.2",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562559-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto es un mango maduro y dulce, ideal para disfrutar en postres o como snack.",
//   },
//   {
//     id: "3547",
//     producto: "piña",
//     cantidad: "3",
//     precio: "2.9",
//     image_url:
//       "https://wongfood.vtexassets.com/arquivos/ids/562560-800-auto?v=637932589970800000&width=800&height=auto&aspect=true",
//     descripcion:
//       "Este producto es una piña jugosa y tropical, perfecta para preparar jugos y ensaladas de frutas.",
//   },
// ];
