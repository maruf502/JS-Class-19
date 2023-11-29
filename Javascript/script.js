


/*
    var x = 1;


    while (x <= 10){

        document.write(x + "<br/>");

        x++;

    }
*/



    //  2 to 100 Even Number print using While Loop .


/*

    var x = 2;
    var sum = 0;

    while(x <= 100){

        sum = sum + x;

        x = x + 2;

    }

    document.write(sum);

*/


    //  Task - 6  Write a Program that will Print sum of all the Numbers that are divisible by 3 and 5 from 1-100 .


        var x = 1;
        
        var sum = 0;

        while(x <= 100){


            if(x % 3 == 0 && x % 5 ==0){

                sum = sum + x;    

            }
            x = x + 1;

        }

        document.write(sum);