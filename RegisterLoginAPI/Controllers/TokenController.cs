using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using RegisterLoginAPI.Models;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace RegisterLoginAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        public IConfiguration _configuration;
        private readonly trainingtempContext _context;

        public TokenController(IConfiguration config, trainingtempContext context)
        {
            _configuration = config;
            _context = context;
        }

        // POST: api/Token
        //[Route("/authenticate")]
        [HttpPost]
        public async Task<ActionResult<JwtTokenModel>> PostLogin(UserDetails userDetails)
        {
            if (userDetails != null && userDetails.UserName != null && userDetails.Password != null)
            {
                var user = await GetUserDetails(userDetails.UserName, userDetails.Password);
                if (user != null && !user.Status)
                {
                    var claims = new[] {
                        new Claim(JwtRegisteredClaimNames.Sub,_configuration["Jwt:Subject"]),
                         new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),
                          new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                         new Claim(ClaimTypes.Name, user.UserName),
                          new Claim(ClaimTypes.Role,user.Role),
                          new Claim("Id",user.Id.ToString()),
                          new Claim("FirstName",user.FirstName),
                          new Claim("LastName",user.LastName),
                          new Claim("UserName",user.UserName),
                          new Claim("Role",user.Role)
                    };
                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:key"]));

                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(_configuration["Jwt:issuer"], _configuration["Jwt:Audience"], claims,
                        expires: DateTime.UtcNow.AddDays(1), signingCredentials: signIn);
                    JwtTokenModel tokenModel = new JwtTokenModel(user.Id,user.FirstName,user.LastName,user.UserName,user.Role, new JwtSecurityTokenHandler().WriteToken(token));
                    return Ok(tokenModel);
                }
                else
                {
                    if (user!=null && user.Status)
                    {
                        return StatusCode(403);
                    }
                    return BadRequest("Invalid Credentials");
                }
            }
            else
            {
                return BadRequest();
            }

        }

        // POST: api/Token
        //[Route("/register")]
        [HttpPost]
        public async Task<ActionResult<UserDetails>> PostRegister(UserDetails userDetails)
        {

            if (userDetails != null && userDetails.UserName != null && userDetails.Password != null)
            {
                var user = await GetUserName(userDetails.UserName);
                if (user == null)
                {
                    userDetails.Status = false;
                    userDetails.CreatedBy = userDetails.UserName;
                    userDetails.CreatedOn = DateTime.Now;
                    userDetails.ModifiedBy = userDetails.UserName;
                    userDetails.ModifiedOn = userDetails.CreatedOn;

                    _context.UserDetails.Add(userDetails);
                    await _context.SaveChangesAsync();
                   if(userDetails.Id>0)
                    {
                        userDetails.Password = null;
                        return Ok(userDetails);
                    }
                    return BadRequest("Unable to register the user");
                }
                else
                {
                    return BadRequest("user already exists");
                }
            }
            else
            {
                return BadRequest();
            }
        }


        private bool UserDetailsExists(int id)
        {
            return _context.UserDetails.Any(e => e.Id == id);
        }
        private async Task<UserDetails> GetUserDetails(string username, string password)
        {
            return await _context.UserDetails.FirstOrDefaultAsync(u => u.UserName == username && u.Password == password);
        }
        private async Task<UserDetails> GetUserName(string username)
        {
            return await _context.UserDetails.FirstOrDefaultAsync(u => u.UserName == username);
        }
    }
}