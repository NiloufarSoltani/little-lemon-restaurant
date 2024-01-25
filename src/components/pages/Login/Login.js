function Login() {
  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
