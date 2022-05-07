import Nav from "../../components/Nav/Nav"
export default function AboutPage() {
    return (
        <div className="aboutPage">
            <main className="aboutUs">
                <h2 className="abouttitle">About Us</h2>
                <img className="abt" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiBs3nM28uO05pI-i94b4me7rWuRNjAK89vg&usqp=CAU' alt="" />
                <div className="paragraph">
                    <p>At Used Car Links we hope to build a community of car lovers that can help each other out with great deals and new listings.</p>
                    <p> Due to the pandemic people have seen a sharp increase in car prices and used cars are no exception.</p>
                    <p>With the chip shortages car manufacturers and dealers alike saw a decrease in car supplies while demands for them only kept rising.</p>
                    <p>With Used Car Links wwe want to connect people and potentially create cool car meets and auctions in the future.</p>
                </div>
            </main>
        </div>
    )
}