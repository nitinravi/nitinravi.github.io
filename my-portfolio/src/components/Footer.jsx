const Footer = () => {
    return (
      <footer className="py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Nitin Ravi. Built with ♡ by Chatgpt :p</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/nitinravi" className="hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/nitin-ravi" className="hover:underline">LinkedIn</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  