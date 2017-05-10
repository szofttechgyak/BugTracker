package hu.elte.inf.software.technology.bugtracker.application.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class BugTrackerUserDetailService implements UserDetailsService {

    private static class MyUserDetails implements UserDetails {

        /**
         * 
         */
        private static final long serialVersionUID = -5657705264610575276L;

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return AuthorityUtils.createAuthorityList("ROLE_ADMIN");
        }

        @Override
        public String getPassword() {
            return "a";
        }

        @Override
        public String getUsername() {
            return "a";
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
        
    }
    
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return new MyUserDetails();
    }
    
    private Collection<? extends GrantedAuthority> getGrantedAuthorities(String username) {
        return AuthorityUtils.createAuthorityList("ROLE_USER");
    }

}