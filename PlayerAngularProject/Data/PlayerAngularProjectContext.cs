using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PlayerAngularProject.Model;

namespace PlayerAngularProject.Data
{
    public class PlayerAngularProjectContext : DbContext
    {
        public PlayerAngularProjectContext (DbContextOptions<PlayerAngularProjectContext> options)
            : base(options)
        {
        }

        public DbSet<PlayerAngularProject.Model.Team> Team { get; set; }

        public DbSet<PlayerAngularProject.Model.Player> Player { get; set; }
    }
}
