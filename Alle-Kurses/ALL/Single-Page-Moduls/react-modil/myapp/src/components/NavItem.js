function NavItem(props) {
    return (
        <li>
            -
            <a herf={props.navLink} title="Link 1">
                {props.navLabel}
            </a>
            -
        </li>
    );
}
export default NavItem;
