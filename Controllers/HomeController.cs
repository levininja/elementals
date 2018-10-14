using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ElementalBuilder.Models;

namespace ElementalBuilder.Controllers
{
    public class HomeController : Controller
    {
        //Page where you select your element and your development speed.
        //Also perhaps a few other basic things about your character.
        public IActionResult SelectElement()
        {
            return View();
        }
        //Home page where you normally default to.  See everything about your
        //character.
        public IActionResult Index()
        {
            return View();
        }
        //Page that is linked to when you level up and have the opportunity
        //to select a new ability.
        public IActionResult BuildPower()
        {
            return View();
        }

        public IActionResult DevLinks()
        {
            return View();
        }


        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
