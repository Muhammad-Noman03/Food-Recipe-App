import RecipeItems from "../../components/recipe-Items"
import { GlobalContext } from "../../context"
import { useContext } from "react"


export default function Home() {

    const { recipeList, loading } = useContext(GlobalContext);

    if (loading) return <div>Loading..... please wait!</div>

    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            recipeList && recipeList.length > 0 ?
                (recipeList.map((item) => <RecipeItems item={item} />)
                ) : (<div className="lg:text-4xl text-xl text-center text-black font-extrabold">
                    <p>Nothing to show Search Something</p>
                </div>
                )}
    </div>
}