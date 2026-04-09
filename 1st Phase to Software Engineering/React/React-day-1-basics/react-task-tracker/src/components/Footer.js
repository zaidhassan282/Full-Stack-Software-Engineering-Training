

const Footer = ({ year }) => {
    return (
        <div>
            <footer>
                <p>Copyright &copy; {year}</p>
            </footer>
        </div>
    );
};

Footer.defaultProps = {
    year: new Date().getFullYear(),
}

export default Footer;