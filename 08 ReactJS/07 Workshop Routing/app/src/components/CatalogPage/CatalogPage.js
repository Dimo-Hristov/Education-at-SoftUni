import { CartalogItem } from "./CatalogItem/CatalogItem"

export const CatalogPage = ({
    gamesList
}) => {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* Display div: with information about every game (if any) */}
            {gamesList.map((x) => <CartalogItem key={x._id} {...x} />)}
            {/* Display paragraph: If there is no games  */}
            <h3 className="no-articles">No articles yet</h3>
        </section>

    )
}