using Game.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Game.Services
{
    public interface IScoreService
    {
        public List<GetScoreDto> GetAll();
        public GetScoreDto GetOneByUsername(string username);
        public bool Create(GetScoreDto e);
       // public bool Update(int Id, GetScoreDto e);
    }
}
