﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Game.Models
{
    public class Games
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }  
        public string Description { get; set; }
        public List<UsersScores> UsersScores { get; set; }

    }
}
