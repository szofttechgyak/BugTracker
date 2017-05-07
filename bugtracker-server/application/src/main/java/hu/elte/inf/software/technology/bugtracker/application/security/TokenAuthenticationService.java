package hu.elte.inf.software.technology.bugtracker.application.security;

//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import io.jsonwebtoken.SignatureException;
//
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.util.Date;
//
//import static java.util.Collections.emptyList;

//class TokenAuthenticationService {
//    private static final String SECRET = "ThisIsASecret";
//    private static final String TOKEN_PREFIX = "Bearer";
//    private static final String HEADER_STRING = "Authorization";
//
//    public static void addAuthentication(HttpServletResponse res, String username) {
//        String JWT = Jwts.builder().setSubject(username).signWith(SignatureAlgorithm.HS512, SECRET).compact();
//        res.addHeader(HEADER_STRING, TOKEN_PREFIX + " " + JWT);
//    }
//
//    public static Authentication getAuthentication(HttpServletRequest request) {
//        String token = request.getHeader(HEADER_STRING);
//        if (token != null) {
//            // parse the token.
//            String user = null;
//            try {
//                user = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token.replace(TOKEN_PREFIX, "")).getBody().getSubject();
//            } catch(Exception ex) {
//                //TODO
//            }
//            return user != null ? new UsernamePasswordAuthenticationToken(user, null, emptyList()) : null;
//        }
//        return null;
//    }
//}
