import { CartalogItem } from "./CatalogItem/CatalogItem"

export const CatalogPage = ({
    gamesList
}) => {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {gamesList.map((x) => <CartalogItem key={x._id} {...x} />)}

            {gamesList.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}

        </section>

    )
}