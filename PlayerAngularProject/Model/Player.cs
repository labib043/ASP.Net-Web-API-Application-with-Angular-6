using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PlayerAngularProject.Model
{
    public class Player
    {
        [Key]
        public int PlayerId { get; set; }
        public string PlayerName { get; set; }
        public string Image { get; set; }
        public bool IsAvailable { get; set; }
        public DateTime BirthDay { get; set; }
        [NotMapped]
        public string TeamName { get; set; }
        [ForeignKey("TeamId")]
        public int TeamId { get; set; }
        public virtual Team Team { get; set; }
    }
}
