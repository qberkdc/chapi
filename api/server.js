export default function handler(req, res) {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1><p>Bu bir HTML içeriğidir.</p>');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>About Page</h1><p>This is the about page.</p>');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
  }
}
