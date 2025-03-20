export default async function Product(){
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return <h1 className="text-center">Product Page!!</h1>
}