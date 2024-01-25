function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Little Lemon</h3>
                <p>Delighting Your Taste Buds</p>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Little Lemon. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
