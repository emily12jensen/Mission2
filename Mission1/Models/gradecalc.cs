using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Mission1.Models
{
    public class gradecalc
    {
        [Required,Range(0,100)]
        public int assignments { get; set; }
        [Required,Range(0, 100)]
        public int groupproject{get; set; }
        [Required, Range(0, 100)]
        public int quizzes{get; set; }
        [Required, Range(0, 100)]
        public int exams{get; set; }
        [Required, Range(0, 100)]
        public int intex{get; set; }


    }
}
