export default interface Pintura {
  id: number;
  attributes: {
    titulo: string;
    descripcion: string;
    ficha: string;
    slug: string;
    imagen: {
      data:{
        id:number;
        attributes: {
          formats:{
            thumbnail: {
              url: string;
            },
            small: {
              url: string;
            },
            medium: {
              url: string;
            },
            large: {
              url: string;
            },
          }
        }
      }
    }
    fecha: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
