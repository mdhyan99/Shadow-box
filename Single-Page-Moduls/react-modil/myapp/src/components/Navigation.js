import NavItem from "./NavItem";

function Navigation() {
    return (
        <nav>
            <ul>
                <NavItem navLabel="Link 1" navLink ="https://google.de"/>
                <NavItem navLabel="Link 2" navLink ="https://google.de"/>
                <NavItem navLabel="Link 3" navLink ="https://google.de"/>
               
            </ul>
        </nav>
    );
}
export default Navigation;
