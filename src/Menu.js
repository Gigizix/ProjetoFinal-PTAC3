import Image from "next/image";

export default function Menu() {
    return (
        <header>
            <nav>
                <div >
                    <Image
                        width={100}
                        height={100}
                        src="https://tse1.mm.bing.net/th?id=OIP.Beseg65o_c_Qe4m8XzP5iwHaFZ&pid=Api&P=0&h=180"
                    />
                </div>
                <div>
                    <h1>Loja Menina </h1>  
                </div>
                <div>
                    <button>Add produtos</button>
                    <Image
                        width={30}
                        height={30}
                        src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-shopping-cart-line-icon-vector-png-image_5058494.jpg"
                    />
                </div>
            </nav>
        </header>
    )
}