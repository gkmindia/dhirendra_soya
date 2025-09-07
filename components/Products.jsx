import Link from 'next/link'

const productList = [
  {
    id: 1,
    image: "/images/products/soya_oil.jpg",
    title: "Refined Soybean Oil",
    description: "Refined Soybean Oil from Dhirendra Soya is a light, odorless, and nutritious edible oil extracted from premium-quality soybeans. Rich in polyunsaturated fats and Omega-3 fatty acids, it promotes heart health and is ideal for everyday cooking, frying, and baking. With its high smoke point and neutral taste, it is a trusted choice for households, restaurants, and the food industry. Our advanced refining process ensures purity, extended shelf life, and consistent quality in every drop."
  },
  {
    id: 2,
    image: "/images/products/soya_doc.jpg",
    title: "Soybean DOC",
    description: "Soybean De-Oiled Cake (Soya DOC), produced by Dhirendra Soya, is a high-protein, nutrient-rich feed supplement widely used in the animal feed industry. Known for its high digestibility, balanced amino acid profile, and excellent energy content, Soya DOC is considered a premium-quality livestock feed ingredient. It plays a vital role in enhancing growth, health, and productivity in poultry, dairy, and aquaculture."
  },
  {
    id: 3,
    image: "/images/products/soya_acid_oil.jpg",
    title: "Acid Oil",
    description: "Acid Oil, produced by Dhirendra Soya, is a valuable by-product derived from the refining of vegetable oils, especially soybean oil. It is primarily composed of free fatty acids, along with neutral oil, moisture, and other impurities."
  },
  {
    id: 4,
    image: "/images/products/lecithin.jpg",
    title: "Lecithin",
    description: "Lecithin, manufactured by Dhirendra Soya, is a naturally occurring group of fats essential for maintaining healthy cell structure and function in the human body. Extracted from high-quality soybeans, our lecithin is rich in phospholipids, making it an excellent emulsifier, stabilizer, and hydrating agent used across various industries."
  },
  {
    id: 5,
    image: "/images/products/soya_crude_oil.jpg",
    title: "Crude Oil",
    description: "Crude Soybean Oil, produced by Dhirendra Soya, is the unrefined form of soybean oil obtained through solvent extraction using high-quality soybean flakes and food-grade hexane. After extraction, the solvent is carefully removed, resulting in a golden-yellow oil rich in natural antioxidants, vitamins, and unsaturated fatty acids."
  }
]

const Products = () => {
    return (
        <>
            <div className='row align-items-center g-5 py-4 py-md-5 products_item'>
                <div className="col-md-6">
                    <img src={productList[0].image} alt={productList[0].title} className='img-fluid' />
                </div>
                <div className="col-md-6">
                    <h2 className="title_two mb-3">{productList[0].title}</h2>
                    <p>{productList[0].description}</p>
                    <Link href="specification/refined-soybean-oil" className="btn btn-primary mt-4">View more<i className="bi bi-arrow-right ms-2"></i></Link>
                </div>
            </div>
                
            <div className='row align-items-center g-5 py-4 py-md-5 products_item'>
                <div className="col-md-6 order-2 order-md-1">
                    <h2 className="title_two mb-3">{productList[1].title}</h2>
                    <p>{productList[1].description}</p>
                    <Link href="/specification/soybean-de-oiled-cake" className="btn btn-primary mt-4">View more<i className="bi bi-arrow-right ms-2"></i></Link>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                    <img src={productList[1].image} alt={productList[1].title} className='img-fluid' />
                </div>
            </div>

            <div className='row align-items-center g-5 py-4 py-md-5 products_item'>

                <div className="col-md-6">
                    <img src={productList[2].image} alt={productList[2].title} className='img-fluid' />
                </div>
                <div className="col-md-6">
                    <h2 className="title_two mb-3">{productList[2].title}</h2>
                    <p>{productList[2].description}</p>
                    <Link href="/specification/acid-oil" className="btn btn-primary mt-4">View more<i className="bi bi-arrow-right ms-2"></i></Link>
                </div>
            </div>

            <div className='row align-items-center g-5 py-4 py-md-5 products_item'>
                <div className="col-md-6 order-2 order-md-1">
                    <h2 className="title_two mb-3">{productList[3].title}</h2>
                    <p>{productList[3].description}</p>
                    <Link href="/specification/lecithin" className="btn btn-primary mt-4">View more<i className="bi bi-arrow-right ms-2"></i></Link>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                    <img src={productList[3].image} alt={productList[3].title} className='img-fluid' />
                </div>
            </div>
            <div className='row align-items-center g-5 py-4 py-md-5 products_item'>
                <div className="col-md-6">
                    <img src={productList[4].image} alt={productList[4].title} className='img-fluid' />
                </div>
                <div className="col-md-6">
                    <h2 className="title_two mb-3">{productList[4].title}</h2>
                    <p>{productList[4].description}</p>
                    <Link href="/specification/crude-oil" className="btn btn-primary mt-4">View more<i className="bi bi-arrow-right ms-2"></i></Link>
                </div>

            </div>
        </>
    )
}

export default Products
