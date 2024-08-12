export default function CommentDetail({params}:{
    params:{
        productId: string,
        commentId: string
    }
}){
    return <h1>Comentario {params.commentId}: Producto {params.productId}</h1>
}