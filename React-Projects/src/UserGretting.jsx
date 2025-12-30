

function UserGretting(props) {
    const wm = <h2>Welcome {props.UserName}</h2>
    const ln = <h2>Please log in to see magic</h2>
    return( props.isLoggedIn ? wm : ln);
}
export default UserGretting;
