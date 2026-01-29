import { Link } from "react-router";


export default function FundamentalNavigation() {
    return (
        <nav className="block">
            <ul className="flex flex-row justify-between">
                <li><Link to="fundamental/single-analysis">SingleAnalysis</Link></li>
                <li><Link to="fundamental/auto-analysis">AutoAnalysis</Link></li>
            </ul>
        </nav>
    )
}