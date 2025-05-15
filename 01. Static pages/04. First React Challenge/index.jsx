/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */
import {createRoot} from "react-dom/client"
const root = createRoot(document.getElemementById("root"))
root.render(<ul>
    <li>Do well in internship</li>
    <li>Build exciting things</li>
    <li>Explore more opportunities</li>
</ul>)
