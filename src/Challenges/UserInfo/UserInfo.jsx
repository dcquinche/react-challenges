const UserInfo = ({user}) => (
  <section>
    <h2>User Information</h2>
    <img alt="profile" src={user.picture.large} />
    <p>Name: {user.name.first} {user.name.last}</p>
    <p>Email: {user.email}</p>
    <p>Gender: {user.gender}</p>
    <p>Location: {user.location.city}, {user.location.country}</p>
  </section>
)

export default UserInfo;
