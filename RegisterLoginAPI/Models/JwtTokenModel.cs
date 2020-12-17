using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RegisterLoginAPI.Models
{
    public class JwtTokenModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Token { get; set; }
        public string Role { get; set; }

        public JwtTokenModel(int Id, string FirstName, string LastName, string UserName, string Role, string Token)
        {

            this.Id = Id;
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.UserName = UserName;
            this.Role = Role;
            this.Token = Token;
        }

    }
}
