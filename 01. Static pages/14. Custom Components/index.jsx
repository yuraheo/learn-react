import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

root.render(
    <Page />
)

function Page() {
    return(
    <ol>
        <li>reason 1</li>
        <li>reason 2</li>
        <li>reason 3</li>
    </ol>
    )
}
