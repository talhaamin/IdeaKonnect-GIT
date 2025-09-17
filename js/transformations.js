// start of function to split shape in to four

function split_into_four() {
       if (pic_check == 1) {
           p = 0;
           ctx.fillStyle = 'white';
           ctx.fillRect(0, 0, 500, 500);
           // ctx.drawImage(copycanvas, 0, 0);
           for (var o = 0; o < length_of_arr; o++) {
               if (check1 == 1 && arr[o] == 1) {
                   temp = transformed_array;

                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(temp, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape1_draw(ans);
                   rotate(temp, 90);
                   shape1_draw(fans);
                   rotate(ans, 180);
                   shape1_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape1_draw(fans);
                   count *= 4;
               }


               if (check2 == 1 && arr[o] == 2) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array2, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape2_draw(ans);
                   rotate(transformed_array2, 90);
                   shape2_draw(fans);
                   rotate(ans, 180);
                   shape2_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape2_draw(fans);
                   count2 *= 4;
               }


               if (check3 == 1 && arr[o] == 3) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array3, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape3_draw(ans);
                   rotate(transformed_array3, 90);
                   shape3_draw(fans);
                   rotate(ans, 180);
                   shape3_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape3_draw(fans);
                   count3 *= 4;
               }


               if (check4 == 1 && arr[o] == 4) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array4, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape4_draw(ans);
                   rotate(transformed_array4, 90);
                   shape4_draw(fans);
                   rotate(ans, 180);
                   shape4_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape4_draw(fans);
                   count4 *= 4;
               }




               if (check5 == 1 && arr[o] == 5) {

                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array5, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape5_draw(ans);
                   rotate(transformed_array5, 90);
                   shape5_draw(fans);
                   rotate(ans, 180);
                   shape5_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape5_draw(fans);
                   count5 *= 4;
               }




               if (check6 == 1 && arr[o] == 6) {

                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array6, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape6_draw(ans);
                   rotate(transformed_array6, 90);
                   shape6_draw(fans);
                   rotate(ans, 180);
                   shape6_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape6_draw(fans);
                   count6 *= 4;
               }



               if (check7 == 1 && arr[o] == 7) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array7, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape7_draw(ans);
                   rotate(transformed_array7, 90);
                   shape7_draw(fans);
                   rotate(ans, 180);
                   shape7_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape7_draw(fans);
                   count7 *= 4;
               }



               if (check8 == 1 && arr[o] == 8) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array8, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape8_draw(ans);
                   rotate(transformed_array8, 90);
                   shape8_draw(fans);
                   rotate(ans, 180);
                   shape8_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape8_draw(fans);
                   count8 *= 4;
               }


               if (check9 == 1 && arr[o] == 9) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array9, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape9_draw(ans);
                   rotate(transformed_array9, 90);
                   shape9_draw(fans);
                   rotate(ans, 180);
                   shape9_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape9_draw(fans);
                   count9 *= 4;
               }




               if (check10 == 1 && arr[o] == 10) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array10, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape10_draw(ans);
                   rotate(transformed_array10, 90);
                   shape10_draw(fans);
                   rotate(ans, 180); ;
                   shape10_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape10_draw(fans);
                   count10 *= 4;
               }


               if (check22 == 1 && arr[o] == 22) {
                   range = 0;
                   h = 0;
                   flag = 0
                   scale(transformed_array22, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   random_drawn(ans);
                   rotate(ans, 90);
                   random_drawn(fans);
                   rotate(ans, 180); ;
                   random_drawn(fans);
                   rotate(ans, 270);
                   flag = 1;
                   random_drawn(fans);
                   count22 *= 4;

               }
           } //end of loop 
       }
       else
           alert("You cannot apply geometric tranformation in Image Mode");
    }

// end of function to split shape in to four



//start of function to split shape in to three


 function split_into_three() {
      if (pic_check == 1) {
          p = 0;
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, 500, 500);
          //ctx.drawImage(copycanvas, 0, 0);
          for (var o = 0; o < length_of_arr; o++) {
              if (check22 == 1 && arr[o] == 22) {

                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array22, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  random_drawn(ans);
                  rotate(transformed_array22, 90);
                  random_drawn(fans);
                  rotate(ans, 180);
                  flag = 1;
                  random_drawn(fans);
                  //rotate(ans,270);
                  count22 *= 3;
              }


              if (check1 == 1 && arr[o] == 1) {

                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape1_draw(ans);
                  rotate(transformed_array, 90);
                  shape1_draw(fans);
                  rotate(ans, 180);
                  flag = 1;
                  shape1_draw(fans);
                  //rotate(ans,270);
                  count *= 3;
              }


              if (check2 == 1 && arr[o] == 2) {


                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array2, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape2_draw(ans);
                  rotate(transformed_array2, 90);
                  shape2_draw(fans);
                  rotate(ans, 180);
                  flag = 1;
                  shape2_draw(fans);
                  count2 *= 3;
              }


              if (check3 == 1 && arr[o] == 3) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array3, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape3_draw(ans);
                  rotate(transformed_array3, 90);
                  shape3_draw(fans);
                  rotate(ans, 180);
                  flag = 1;
                  shape3_draw(fans);
                  count3 *= 3;
              }



              if (check4 == 1 && arr[o] == 4) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array4, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape4_draw(ans);
                  rotate(transformed_array4, 90);
                  shape4_draw(fans);
                  rotate(ans, 180);
                  flag = 1;
                  shape4_draw(fans);
                  count4 *= 3;
              }



              if (check5 == 1 && arr[o] == 5) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array5, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape5_draw(ans);
                  rotate(transformed_array5, 90);
                  shape5_draw(fans);
                  rotate(ans, 180);
                  flag = 1;
                  shape5_draw(fans);
                  count5 *= 3;
              }



              if (check6 == 1 && arr[o] == 6) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array6, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape6_draw(ans);
                  rotate(transformed_array6, 90);
                  shape6_draw(fans);
                  rotate(ans, 180);
                  flag = 1;
                  shape6_draw(fans);
                  count6 *= 3;
              }



              if (check7 == 1 && arr[o] == 7) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array7, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape7_draw(ans);
                  rotate(transformed_array7, 90);
                  shape7_draw(fans);
                  rotate(ans, 180);
                  flag = 1;
                  shape7_draw(fans);
                  count7 *= 3;
              }


              if (check8 == 1 && arr[o] == 8) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array8, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape8_draw(ans);
                  rotate(transformed_array8, 90);
                  shape8_draw(fans);
                  rotate(ans, 180);
                  flag = 1;
                  shape8_draw(fans);
                  count8 *= 3;
              }



              if (check9 == 1 && arr[o] == 9) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array9, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape9_draw(ans);
                  rotate(transformed_array9, 90);
                  shape9_draw(fans);
                  rotate(ans, 180);
                  flag = 1;
                  shape9_draw(fans);
                  count9 *= 3;
              }



              if (check10 == 1 && arr[o] == 10) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array10, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape10_draw(ans);
                  rotate(transformed_array10, 90);
                  shape10_draw(fans);
                  rotate(ans, 180);
                  flag = 1;
                  shape10_draw(fans);
                  count10 *= 3;
              }
          } // END OF LOOp
      }
      else
          alert("You cannot apply geometric tranforamtion in Image Mode");
   }

//end of function to split shape in to three



// start of function to split shape in to three (case-1)

  function split_into_threeA1() {
       if (pic_check == 1) {
           p = 0;
           ctx.fillStyle = 'white';
           ctx.fillRect(0, 0, 500, 500);
           //ctx.drawImage(copycanvas, 0, 0);
           for (var o = 0; o < length_of_arr; o++) {
               if (check22 == 1 && arr[o] == 22) {

                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array22, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   random_drawn(ans);
                   rotate(transformed_array22, -90);
                   random_drawn(fans);
                   rotate(ans, 180);
                   flag = 1;
                   random_drawn(fans);
                   //rotate(ans,270);
                   count22 *= 3;
               }


               if (check1 == 1 && arr[o] == 1) {

                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape1_draw(ans);
                   rotate(transformed_array, -90);
                   shape1_draw(fans);
                   rotate(ans, 180);
                   flag = 1;
                   shape1_draw(fans);
                   //rotate(ans,270);
                   count *= 3;
               }


               if (check2 == 1 && arr[o] == 2) {


                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array2, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape2_draw(ans);
                   rotate(transformed_array2, -90);
                   shape2_draw(fans);
                   rotate(ans, 180);
                   flag = 1;
                   shape2_draw(fans);
                   count2 *= 3;
               }


               if (check3 == 1 && arr[o] == 3) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array3, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape3_draw(ans);
                   rotate(transformed_array3, -90);
                   shape3_draw(fans);
                   rotate(ans, 180);
                   flag = 1;
                   shape3_draw(fans);
                   count3 *= 3;
               }



               if (check4 == 1 && arr[o] == 4) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array4, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape4_draw(ans);
                   rotate(transformed_array4, -90);
                   shape4_draw(fans);
                   rotate(ans, 180);
                   flag = 1;
                   shape4_draw(fans);
                   count4 *= 3;
               }



               if (check5 == 1 && arr[o] == 5) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array5, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape5_draw(ans);
                   rotate(transformed_array5, -90);
                   shape5_draw(fans);
                   rotate(ans, 180);
                   flag = 1;
                   shape5_draw(fans);
                   count5 *= 3;
               }



               if (check6 == 1 && arr[o] == 6) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array6, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape6_draw(ans);
                   rotate(transformed_array6, -90);
                   shape6_draw(fans);
                   rotate(ans, 180);
                   flag = 1;
                   shape6_draw(fans);
                   count6 *= 3;
               }



               if (check7 == 1 && arr[o] == 7) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array7, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape7_draw(ans);
                   rotate(transformed_array7, -90);
                   shape7_draw(fans);
                   rotate(ans, 180);
                   flag = 1;
                   shape7_draw(fans);
                   count7 *= 3;
               }


               if (check8 == 1 && arr[o] == 8) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array8, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape8_draw(ans);
                   rotate(transformed_array8, -90);
                   shape8_draw(fans);
                   rotate(ans, 180);
                   flag = 1;
                   shape8_draw(fans);
                   count8 *= 3;
               }



               if (check9 == 1 && arr[o] == 9) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array9, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape9_draw(ans);
                   rotate(transformed_array9, -90);
                   shape9_draw(fans);
                   rotate(ans, 180);
                   flag = 1;
                   shape9_draw(fans);
                   count9 *= 3;
               }



               if (check10 == 1 && arr[o] == 10) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array10, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape10_draw(ans);
                   rotate(transformed_array10, -90);
                   shape10_draw(fans);
                   rotate(ans, 180);
                   flag = 1;
                   shape10_draw(fans);
                   count10 *= 3;
               }
           } // END OF LOOp
       }
       else
           alert("You cannot apply geometric tranforamtion in Image Mode");
   }

// end of function to split shape in to three (case-1) 

// start of function to split shape in to three (case-2) 
       function split_into_threeA2() {
       if (pic_check == 1) {
           p = 0;
           ctx.fillStyle = 'white';
           ctx.fillRect(0, 0, 500, 500);
           //ctx.drawImage(copycanvas, 0, 0);
           for (var o = 0; o < length_of_arr; o++) {
               if (check22 == 1 && arr[o] == 22) {

                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array22, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   random_drawn(ans);
                   rotate(transformed_array22, -90);
                   random_drawn(fans);
                   rotate(ans, 90);
                   flag = 1;
                   random_drawn(fans);
                   //rotate(ans,270);
                   count22 *= 3;
               }


               if (check1 == 1 && arr[o] == 1) {

                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape1_draw(ans);
                   rotate(transformed_array, -90);
                   shape1_draw(fans);
                   rotate(ans, 90);
                   flag = 1;
                   shape1_draw(fans);
                   //rotate(ans,270);
                   count *= 3;
               }


               if (check2 == 1 && arr[o] == 2) {


                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array2, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape2_draw(ans);
                   rotate(transformed_array2, -90);
                   shape2_draw(fans);
                   rotate(ans, 90);
                   flag = 1;
                   shape2_draw(fans);
                   count2 *= 3;
               }


               if (check3 == 1 && arr[o] == 3) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array3, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape3_draw(ans);
                   rotate(transformed_array3, -90);
                   shape3_draw(fans);
                   rotate(ans, 90);
                   flag = 1;
                   shape3_draw(fans);
                   count3 *= 3;
               }



               if (check4 == 1 && arr[o] == 4) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array4, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape4_draw(ans);
                   rotate(transformed_array4, -90);
                   shape4_draw(fans);
                   rotate(ans, 90);
                   flag = 1;
                   shape4_draw(fans);
                   count4 *= 3;
               }



               if (check5 == 1 && arr[o] == 5) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array5, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape5_draw(ans);
                   rotate(transformed_array5, -90);
                   shape5_draw(fans);
                   rotate(ans, 90);
                   flag = 1;
                   shape5_draw(fans);
                   count5 *= 3;
               }



               if (check6 == 1 && arr[o] == 6) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array6, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape6_draw(ans);
                   rotate(transformed_array6, -90);
                   shape6_draw(fans);
                   rotate(ans, 90);
                   flag = 1;
                   shape6_draw(fans);
                   count6 *= 3;
               }



               if (check7 == 1 && arr[o] == 7) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array7, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape7_draw(ans);
                   rotate(transformed_array7, -90);
                   shape7_draw(fans);
                   rotate(ans, 90);
                   flag = 1;
                   shape7_draw(fans);
                   count7 *= 3;
               }


               if (check8 == 1 && arr[o] == 8) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array8, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape8_draw(ans);
                   rotate(transformed_array8, -90);
                   shape8_draw(fans);
                   rotate(ans, 90);
                   flag = 1;
                   shape8_draw(fans);
                   count8 *= 3;
               }



               if (check9 == 1 && arr[o] == 9) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array9, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape9_draw(ans);
                   rotate(transformed_array9, -90);
                   shape9_draw(fans);
                   rotate(ans,90);
                   flag = 1;
                   shape9_draw(fans);
                   count9 *= 3;
               }



               if (check10 == 1 && arr[o] == 10) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array10, 250, 250, 0.5, 0.5);
                   translate(ans, 0, -125);
                   shape10_draw(ans);
                   rotate(transformed_array10, -90);
                   shape10_draw(fans);
                   rotate(ans, 90);
                   flag = 1;
                   shape10_draw(fans);
                   count10 *= 3;
               }
           } // END OF LOOp
       }
       else
           alert("You cannot apply geometric tranforamtion in Image Mode");
   }
     

// end of function to split shape in to three (case-2) 

// start of function to split shape in to three (case-3) 
          function split_into_threeA3() {
       if (pic_check == 1) {
           p = 0;
           ctx.fillStyle = 'white';
           ctx.fillRect(0, 0, 500, 500);
           //ctx.drawImage(copycanvas, 0, 0);
           for (var o = 0; o < length_of_arr; o++) {
               if (check22 == 1 && arr[o] == 22) {

                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array22, 250, 250, 0.5, 0.5);
                   translate(ans, 0, 125);
                   random_drawn(ans);
                   rotate(transformed_array22, 90);
                   random_drawn(fans);
                   rotate(ans, -90);
                   flag = 1;
                   random_drawn(fans);
                   //rotate(ans,270);
                   count22 *= 3;
               }


               if (check1 == 1 && arr[o] == 1) {

                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array, 250, 250, 0.5, 0.5);
                   translate(ans, 0, 125);
                   shape1_draw(ans);
                   rotate(transformed_array, 90);
                   shape1_draw(fans);
                   rotate(ans, -90);
                   flag = 1;
                   shape1_draw(fans);
                   //rotate(ans,270);
                   count *= 3;
               }


               if (check2 == 1 && arr[o] == 2) {


                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array2, 250, 250, 0.5, 0.5);
                   translate(ans, 0, 125);
                   shape2_draw(ans);
                   rotate(transformed_array2, 90);
                   shape2_draw(fans);
                   rotate(ans,-90);
                   flag = 1;
                   shape2_draw(fans);
                   count2 *= 3;
               }


               if (check3 == 1 && arr[o] == 3) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array3, 250, 250, 0.5, 0.5);
                   translate(ans, 0, 125);
                   shape3_draw(ans);
                   rotate(transformed_array3, 90);
                   shape3_draw(fans);
                   rotate(ans, -90);
                   flag = 1;
                   shape3_draw(fans);
                   count3 *= 3;
               }



               if (check4 == 1 && arr[o] == 4) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array4, 250, 250, 0.5, 0.5);
                   translate(ans, 0, 125);
                   shape4_draw(ans);
                   rotate(transformed_array4, 90);
                   shape4_draw(fans);
                   rotate(ans, -90);
                   flag = 1;
                   shape4_draw(fans);
                   count4 *= 3;
               }



               if (check5 == 1 && arr[o] == 5) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array5, 250, 250, 0.5, 0.5);
                   translate(ans, 0, 125);
                   shape5_draw(ans);
                   rotate(transformed_array5, 90);
                   shape5_draw(fans);
                   rotate(ans, -90);
                   flag = 1;
                   shape5_draw(fans);
                   count5 *= 3;
               }



               if (check6 == 1 && arr[o] == 6) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array6, 250, 250, 0.5, 0.5);
                   translate(ans, 0, 125);
                   shape6_draw(ans);
                   rotate(transformed_array6, 90);
                   shape6_draw(fans);
                   rotate(ans, -90);
                   flag = 1;
                   shape6_draw(fans);
                   count6 *= 3;
               }



               if (check7 == 1 && arr[o] == 7) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array7, 250, 250, 0.5, 0.5);
                   translate(ans, 0, 125);
                   shape7_draw(ans);
                   rotate(transformed_array7, 90);
                   shape7_draw(fans);
                   rotate(ans, -90);
                   flag = 1;
                   shape7_draw(fans);
                   count7 *= 3;
               }


               if (check8 == 1 && arr[o] == 8) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array8, 250, 250, 0.5, 0.5);
                   translate(ans, 0,125);
                   shape8_draw(ans);
                   rotate(transformed_array8, 90);
                   shape8_draw(fans);
                   rotate(ans, -90);
                   flag = 1;
                   shape8_draw(fans);
                   count8 *= 3;
               }



               if (check9 == 1 && arr[o] == 9) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array9, 250, 250, 0.5, 0.5);
                   translate(ans, 0, 125);
                   shape9_draw(ans);
                   rotate(transformed_array9, 90);
                   shape9_draw(fans);
                   rotate(ans, -90);
                   flag = 1;
                   shape9_draw(fans);
                   count9 *= 3;
               }



               if (check10 == 1 && arr[o] == 10) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array10, 250, 250, 0.5, 0.5);
                   translate(ans, 0, 125);
                   shape10_draw(ans);
                   rotate(transformed_array10, 90);
                   shape10_draw(fans);
                   rotate(ans, -90);
                   flag = 1;
                   shape10_draw(fans);
                   count10 *= 3;
               }
           } // END OF LOOp
       }
       else
           alert("You cannot apply geometric tranforamtion in Image Mode");
   }

// end of function to split shape in to three (case-3) 

// start of function to split shape in to eight
    function split_into_eight() {
      if (pic_check == 1) {
          p = 0;
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, 500, 500);
          //ctx.drawImage(copycanvas, 0, 0);
          for (var o = 0; o < length_of_arr; o++) {
              if (check22 == 1 && arr[o] == 22) {
                  h = 0; range = 0; flag = 0; //index = 20;
                  translate(transformed_array22, 0, 0);
                  random_drawn(ans);
                  rotate(ans, 45);
                  random_drawn(fans);
                  rotate(ans, 90);
                  random_drawn(fans);
                  rotate(ans, 135);
                  random_drawn(fans);
                  rotate(ans, 180);
                  random_drawn(fans);
                  rotate(ans, 225);
                  random_drawn(fans);
                  rotate(ans, 270);
                  random_drawn(fans);
                  rotate(ans, 315);
                  flag = 1;
                  random_drawn(fans);
                  //random = fans;
                  count22 *= 8;
              }




              if (check1 == 1 && arr[o] == 1) {
                  temp = transformed_array;


                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(temp, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape1_draw(ans);
                  rotate(temp, 45);
                  shape1_draw(fans);
                  rotate(temp, 90);
                  shape1_draw(fans);
                  rotate(temp, 135);
                  shape1_draw(fans);
                  rotate(ans, 180);
                  shape1_draw(fans);
                  rotate(temp, 225);
                  shape1_draw(fans);
                  rotate(ans, 270);
                  shape1_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape1_draw(fans);
                  count *= 8;
              }


              if (check2 == 1 && arr[o] == 2) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array2, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape2_draw(ans);
                  rotate(transformed_array2, 45);
                  shape2_draw(fans);
                  rotate(transformed_array2, 90);
                  shape2_draw(fans);
                  rotate(transformed_array2, 135);
                  shape2_draw(fans);
                  rotate(ans, 180);
                  shape2_draw(fans);
                  rotate(transformed_array2, 225);
                  shape2_draw(fans);
                  rotate(ans, 270);
                  shape2_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape2_draw(fans);
                  count2 *= 8;
              }



              if (check3 == 1 && arr[o] == 3) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array3, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape3_draw(ans);
                  rotate(transformed_array3, 45);
                  shape3_draw(fans);
                  rotate(transformed_array3, 90);
                  shape3_draw(fans);
                  rotate(transformed_array3, 135);
                  shape3_draw(fans);
                  rotate(ans, 180);
                  shape3_draw(fans);
                  rotate(transformed_array3, 225);
                  shape3_draw(fans);
                  rotate(ans, 270);
                  shape3_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape3_draw(fans);
                  count3 *= 8;
              }


              if (check4 == 1 && arr[o] == 4) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array4, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape4_draw(ans);
                  rotate(transformed_array4, 45);
                  shape4_draw(fans);
                  rotate(transformed_array4, 90);
                  shape4_draw(fans);
                  rotate(transformed_array4, 135);
                  shape4_draw(fans);
                  rotate(ans, 180);
                  shape4_draw(fans);
                  rotate(transformed_array4, 225);
                  shape4_draw(fans);
                  rotate(ans, 270);
                  shape4_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape4_draw(fans);
                  count4 *= 8;
              }




              if (check5 == 1 && arr[o] == 5) {

                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array5, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape5_draw(ans);
                  rotate(transformed_array5, 45);
                  shape5_draw(fans);
                  rotate(transformed_array5, 90);
                  shape5_draw(fans);
                  rotate(transformed_array5, 135);
                  shape5_draw(fans);
                  rotate(ans, 180);
                  shape5_draw(fans);
                  rotate(transformed_array5, 225);
                  shape5_draw(fans);
                  rotate(ans, 270);
                  shape5_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape5_draw(fans);
                  count5 *= 8;
              }


              if (check6 == 1 && arr[o] == 6) {

                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array6, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape6_draw(ans);
                  rotate(transformed_array6, 45);
                  shape6_draw(fans);
                  rotate(transformed_array6, 90);
                  shape6_draw(fans);
                  rotate(transformed_array6, 135);
                  shape6_draw(fans);
                  rotate(ans, 180);
                  shape6_draw(fans);
                  rotate(transformed_array6, 225);
                  shape6_draw(fans);
                  rotate(ans, 270);
                  shape6_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape6_draw(fans);
                  count6 *= 8;
              }



              if (check7 == 1 && arr[o] == 7) {

                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array7, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape7_draw(ans);
                  rotate(transformed_array7, 45);
                  shape7_draw(fans);
                  rotate(transformed_array7, 90);
                  shape7_draw(fans);
                  rotate(transformed_array7, 135);
                  shape7_draw(fans);
                  rotate(ans, 180);
                  shape7_draw(fans);
                  rotate(transformed_array7, 225);
                  shape7_draw(fans);
                  rotate(ans, 270);
                  shape7_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape7_draw(fans);
                  count7 *= 8;
              }


              if (check8 == 1 && arr[o] == 8) {

                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array8, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape8_draw(ans);
                  rotate(transformed_array8, 45);
                  shape8_draw(fans);
                  rotate(transformed_array8, 90);
                  shape8_draw(fans);
                  rotate(transformed_array8, 135);
                  shape8_draw(fans);
                  rotate(ans, 180);
                  shape8_draw(fans);
                  rotate(transformed_array8, 225);
                  shape8_draw(fans);
                  rotate(ans, 270);
                  shape8_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape8_draw(fans);
                  count8 *= 8;
              }

              if (check9 == 1 && arr[o] == 9) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array9, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape9_draw(ans);
                  rotate(transformed_array9, 45);
                  shape9_draw(fans);
                  rotate(transformed_array9, 90);
                  shape9_draw(fans);
                  rotate(transformed_array9, 135);
                  shape9_draw(fans);
                  rotate(ans, 180);
                  shape9_draw(fans);
                  rotate(transformed_array9, 225);
                  shape9_draw(fans);
                  rotate(ans, 270);
                  shape9_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape9_draw(fans);
                  count9 *= 8;
              }



              if (check10 == 1 && arr[o] == 10) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array10, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape10_draw(ans);
                  rotate(transformed_array10, 45);
                  shape10_draw(fans);
                  rotate(transformed_array10, 90);
                  shape10_draw(fans);
                  rotate(transformed_array10, 135);
                  shape10_draw(fans);
                  rotate(ans, 180);
                  shape10_draw(fans);
                  rotate(transformed_array10, 225);
                  shape10_draw(fans);
                  rotate(ans, 270);
                  shape10_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape10_draw(fans);
                  count10 *= 8;
              }
          } // end of loop
      }
      else
          alert("You cannot apply geometric transformation in Image Mode");
   }


// end of function to split shape in to eight 

// start of function to split shape in to eight  (Case-1)
     
  function split_into_eightA()
   {if (pic_check == 1) {
           p = 0;
           ctx.fillStyle = 'white';
           ctx.fillRect(0, 0, 500, 500);
           // ctx.drawImage(copycanvas, 0, 0);
           for (var o = 0; o < length_of_arr; o++) {
               if (check1 == 1 && arr[o] == 1) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array, 250, 250, 0.5, 0.5);
                   translate(ans, -125, -125);
                   shape1_draw(ans);
                   rotate(ans, 90);
                   shape1_draw(fans);
                   rotate(ans, 180);
                   shape1_draw(fans);
                   rotate(ans, 270);
                   shape1_draw(fans);
                   rotate(ans, 360);
                   translate(fans, +125, +125);
                   rotate(ans, 45);

                   translate(fans, 0, -145);
                   shape1_draw(ans);
                   rotate(ans, 90);
                   shape1_draw(fans);
                   rotate(ans, 180);
                   shape1_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape1_draw(fans);

                   count *= 8;
               }



               if (check2 == 1 && arr[o] == 2) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array2, 250, 250, 0.5, 0.5);
                   translate(ans, -125, -125);
                   shape2_draw(ans);
                   rotate(ans, 90);
                   shape2_draw(fans);
                   rotate(ans, 180);
                   shape2_draw(fans);
                   rotate(ans, 270);
                   shape2_draw(fans);
                   rotate(ans, 360);
                   translate(fans, +125, +125);
                   rotate(ans, 45);

                   translate(fans, 0, -145);
                   shape2_draw(ans);
                   rotate(ans, 90);
                   shape2_draw(fans);
                   rotate(ans, 180);
                   shape2_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape2_draw(fans);

                   count2 *= 8;
               }


               if (check3 == 1 && arr[o] == 3) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array3, 250, 250, 0.5, 0.5);
                   translate(ans, -125, -125);
                   shape3_draw(ans);
                   rotate(ans, 90);
                   shape3_draw(fans);
                   rotate(ans, 180);
                   shape3_draw(fans);
                   rotate(ans, 270);
                   shape3_draw(fans);
                   rotate(ans, 360);
                   translate(fans, +125, +125);
                   rotate(ans, 45);

                   translate(fans, 0, -145);
                   shape3_draw(ans);
                   rotate(ans, 90);
                   shape3_draw(fans);
                   rotate(ans, 180);
                   shape3_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape3_draw(fans);

                   count3 *= 8;
               }



               if (check4 == 1 && arr[o] == 4) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array4, 250, 250, 0.5, 0.5);
                   translate(ans, -125, -125);
                   shape4_draw(ans);
                   rotate(ans, 90);
                   shape4_draw(fans);
                   rotate(ans, 180);
                   shape4_draw(fans);
                   rotate(ans, 270);
                   shape4_draw(fans);
                   rotate(ans, 360);
                   translate(fans, +125, +125);
                   rotate(ans, 45);

                   translate(fans, 0, -145);
                   shape4_draw(ans);
                   rotate(ans, 90);
                   shape4_draw(fans);
                   rotate(ans, 180);
                   shape4_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape4_draw(fans);

                   count4 *= 8;
               }


               if (check5 == 1 && arr[o] == 5) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array5, 250, 250, 0.5, 0.5);
                   translate(ans, -125, -125);
                   shape5_draw(ans);
                   rotate(ans, 90);
                   shape5_draw(fans);
                   rotate(ans, 180);
                   shape5_draw(fans);
                   rotate(ans, 270);
                   shape5_draw(fans);
                   rotate(ans, 360);
                   translate(fans, +125, +125);
                   rotate(ans, 45);

                   translate(fans, 0, -145);
                   shape5_draw(ans);
                   rotate(ans, 90);
                   shape5_draw(fans);
                   rotate(ans, 180);
                   shape5_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape5_draw(fans);

                   count5 *= 8;
               }


               if (check6 == 1 && arr[o] == 6) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array6, 250, 250, 0.5, 0.5);
                   translate(ans, -125, -125);
                   shape6_draw(ans);
                   rotate(ans, 90);
                   shape6_draw(fans);
                   rotate(ans, 180);
                   shape6_draw(fans);
                   rotate(ans, 270);
                   shape6_draw(fans);
                   rotate(ans, 360);
                   translate(fans, +125, +125);
                   rotate(ans, 45);

                   translate(fans, 0, -145);
                   shape6_draw(ans);
                   rotate(ans, 90);
                   shape6_draw(fans);
                   rotate(ans, 180);
                   shape6_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape6_draw(fans);

                   count6 *= 8;
               }



               if (check7 == 1 && arr[o] == 7) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array7, 250, 250, 0.5, 0.5);
                   translate(ans, -125, -125);
                   shape7_draw(ans);
                   rotate(ans, 90);
                   shape7_draw(fans);
                   rotate(ans, 180);
                   shape7_draw(fans);
                   rotate(ans, 270);
                   shape7_draw(fans);
                   rotate(ans, 360);
                   translate(fans, +125, +125);
                   rotate(ans, 45);

                   translate(fans, 0, -145);
                   shape7_draw(ans);
                   rotate(ans, 90);
                   shape7_draw(fans);
                   rotate(ans, 180);
                   shape7_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape7_draw(fans);

                   count7 *= 8;
               }



               if (check8 == 1 && arr[o] == 8) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array8, 250, 250, 0.5, 0.5);
                   translate(ans, -125, -125);
                   shape8_draw(ans);
                   rotate(ans, 90);
                   shape8_draw(fans);
                   rotate(ans, 180);
                   shape8_draw(fans);
                   rotate(ans, 270);
                   shape8_draw(fans);
                   rotate(ans, 360);
                   translate(fans, +125, +125);
                   rotate(ans, 45);

                   translate(fans, 0, -145);
                   shape8_draw(ans);
                   rotate(ans, 90);
                   shape8_draw(fans);
                   rotate(ans, 180);
                   shape8_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape8_draw(fans);

                   count8 *= 8;
               }



               if (check9 == 1 && arr[o] == 9) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array9, 250, 250, 0.5, 0.5);
                   translate(ans, -125, -125);
                   shape9_draw(ans);
                   rotate(ans, 90);
                   shape9_draw(fans);
                   rotate(ans, 180);
                   shape9_draw(fans);
                   rotate(ans, 270);
                   shape9_draw(fans);
                   rotate(ans, 360);
                   translate(fans, +125, +125);
                   rotate(ans, 45);

                   translate(fans, 0, -145);
                   shape9_draw(ans);
                   rotate(ans, 90);
                   shape9_draw(fans);
                   rotate(ans, 180);
                   shape9_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape9_draw(fans);

                   count9 *= 8;
               }


               if (check10 == 1 && arr[o] == 10) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array10, 250, 250, 0.5, 0.5);
                   translate(ans, -125, -125);
                   shape10_draw(ans);
                   rotate(ans, 90);
                   shape10_draw(fans);
                   rotate(ans, 180);
                   shape10_draw(fans);
                   rotate(ans, 270);
                   shape10_draw(fans);
                   rotate(ans, 360);
                   translate(fans, +125, +125);
                   rotate(ans, 45);

                   translate(fans, 0, -145);
                   shape10_draw(ans);
                   rotate(ans, 90);
                   shape10_draw(fans);
                   rotate(ans, 180);
                   shape10_draw(fans);
                   rotate(ans, 270);
                   flag = 1;
                   shape10_draw(fans);

                   count10 *= 8;
               }



               if (check22 == 1 && arr[o] == 22) {
                   range = 0;
                   h = 0;
                   flag = 0;
                   scale(transformed_array22, 250, 250, 0.5, 0.5);
                   translate(ans, -125, -125);
                   random_drawn(ans);
                   rotate(ans, 90);
                   random_drawn(fans);
                   rotate(ans, 180);
                   random_drawn(fans);
                   rotate(ans, 270);
                   random_drawn(fans);
                   rotate(ans, 360);
                   translate(fans, +125, +125);
                   rotate(ans, 45);

                   translate(fans, 0, -145);
                   random_drawn(ans);
                   rotate(ans, 90);
                   random_drawn(fans);
                   rotate(ans, 180);
                   random_drawn(fans);
                   rotate(ans, 270);
                   flag = 1;
                   random_drawn(fans);

                   count22 *= 8;
               }


           } // end of looop
       }
       else
           alert("You cannot apply geometric tranformation in Image Mode");

  }
// end of function to split shape in to eight (Case-1)
  
  
// start of function to split shape in to down four
      function split_into_down_four() {
      if (pic_check == 1) {
          p = 0;
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, 500, 500);
          //ctx.drawImage(copycanvas, 0, 0);
          for (var o = 0; o < length_of_arr; o++) {
              if (check22 == 1 && arr[o] == 22) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array22, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  random_drawn(ans);
                  rotate(transformed_array22, 135);
                  random_drawn(fans);
                  rotate(ans, 180);
                  random_drawn(fans);
                  rotate(ans, 225);
                  flag = 1;
                  random_drawn(fans);

                  count22 *= 4;
              }


              if (check1 == 1 && arr[o] == 1) {

                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape1_draw(ans);
                  rotate(transformed_array, 135);
                  shape1_draw(fans);
                  rotate(ans, 180);
                  shape1_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape1_draw(fans);

                  count *= 4;
              }


              if (check2 == 1 && arr[o] == 2) {


                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array2, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape2_draw(ans);
                  rotate(transformed_array2, 135);
                  shape2_draw(fans);
                  rotate(ans, 180);
                  shape2_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape2_draw(fans);
                  count2 *= 4;
              }


              if (check3 == 1 && arr[o] == 3) {



                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array3, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape3_draw(ans);
                  rotate(transformed_array3, 135);
                  shape3_draw(fans);
                  rotate(ans, 180);
                  shape3_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape3_draw(fans);

                  count3 *= 4;
              }



              if (check4 == 1 && arr[o] == 4) {



                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array4, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape4_draw(ans);
                  rotate(transformed_array4, 135);
                  shape4_draw(fans);
                  rotate(ans, 180);
                  shape4_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape4_draw(fans);
                  count4 *= 4;
              }


              if (check5 == 1 && arr[o] == 5) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array5, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape5_draw(ans);
                  rotate(transformed_array5, 135);
                  shape5_draw(fans);
                  rotate(ans, 180);
                  shape5_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape5_draw(fans);

                  count5 *= 4;
              }


              if (check6 == 1 && arr[o] == 6) {

                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array6, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape6_draw(ans);
                  rotate(transformed_array6, 135);
                  shape6_draw(fans);
                  rotate(ans, 180);
                  shape6_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape6_draw(fans);

                  count6 *= 4;
              }


              if (check7 == 1 && arr[o] == 7) {

                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array7, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape7_draw(ans);
                  rotate(transformed_array7, 135);
                  shape7_draw(fans);
                  rotate(ans, 180);
                  shape7_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape7_draw(fans);

                  count7 *= 4;
              }


              if (check8 == 1 && arr[o] == 8) {

                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array8, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape8_draw(ans);
                  rotate(transformed_array8, 135);
                  shape8_draw(fans);
                  rotate(ans, 180);
                  shape8_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape8_draw(fans);

                  count8 *= 4;
              }


              if (check9 == 1 && arr[o] == 9) {

                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array9, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape9_draw(ans);
                  rotate(transformed_array9, 135);
                  shape9_draw(fans);
                  rotate(ans, 180);
                  shape9_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape9_draw(fans);

                  count9 *= 4;
              }


              if (check10 == 1 && arr[o] == 10) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array10, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape10_draw(ans);
                  rotate(transformed_array10, 135);
                  shape10_draw(fans);
                  rotate(ans, 180);
                  shape10_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape10_draw(fans);

                  count10 *= 4;
              }
          } // end of loop
      }
      else
          alert("You cannot apply geometric transformation in Image Mode");
    }

    
// end of function to split shape in to down four

// start of function to split shape in to down four  (case-1)
     function split_into_down_fourA1() {
        if (pic_check == 1) {
            p = 0;
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, 500, 500);
            //ctx.drawImage(copycanvas, 0, 0);
            for (var o = 0; o < length_of_arr; o++) {
                if (check22 == 1 && arr[o] == 22) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array22, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    random_drawn(ans);
                    rotate(transformed_array22, 45);
                    random_drawn(fans);
                    rotate(ans, -45);
                    random_drawn(fans);
                    rotate(ans, 180);
                    flag = 1;
                    random_drawn(fans);

                    count22 *= 4;
                }


                if (check1 == 1 && arr[o] == 1) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape1_draw(ans);
                    rotate(transformed_array, 45);
                    shape1_draw(fans);
                    rotate(ans, -45);
                    shape1_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape1_draw(fans);

                    count *= 4;
                }


                if (check2 == 1 && arr[o] == 2) {


                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array2, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape2_draw(ans);
                    rotate(transformed_array2, 45);
                    shape2_draw(fans);
                    rotate(ans, -45);
                    shape2_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape2_draw(fans);
                    count2 *= 4;
                }


                if (check3 == 1 && arr[o] == 3) {



                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array3, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape3_draw(ans);
                    rotate(transformed_array3, 45);
                    shape3_draw(fans);
                    rotate(ans, -45);
                    shape3_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape3_draw(fans);

                    count3 *= 4;
                }



                if (check4 == 1 && arr[o] == 4) {



                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array4, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape4_draw(ans);
                    rotate(transformed_array4, 45);
                    shape4_draw(fans);
                    rotate(ans, -45);
                    shape4_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape4_draw(fans);
                    count4 *= 4;
                }


                if (check5 == 1 && arr[o] == 5) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array5, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape5_draw(ans);
                    rotate(transformed_array5, 45);
                    shape5_draw(fans);
                    rotate(ans, -45);
                    shape5_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape5_draw(fans);

                    count5 *= 4;
                }


                if (check6 == 1 && arr[o] == 6) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array6, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape6_draw(ans);
                    rotate(transformed_array6, 45);
                    shape6_draw(fans);
                    rotate(ans, -45);
                    shape6_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape6_draw(fans);

                    count6 *= 4;
                }


                if (check7 == 1 && arr[o] == 7) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array7, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape7_draw(ans);
                    rotate(transformed_array7, 45);
                    shape7_draw(fans);
                    rotate(ans, -45);
                    shape7_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape7_draw(fans);

                    count7 *= 4;
                }


                if (check8 == 1 && arr[o] == 8) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array8, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape8_draw(ans);
                    rotate(transformed_array8, 45);
                    shape8_draw(fans);
                    rotate(ans, -45);
                    shape8_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape8_draw(fans);

                    count8 *= 4;
                }


                if (check9 == 1 && arr[o] == 9) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array9, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape9_draw(ans);
                    rotate(transformed_array9, 45);
                    shape9_draw(fans);
                    rotate(ans, -45);
                    shape9_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape9_draw(fans);

                    count9 *= 4;
                }


                if (check10 == 1 && arr[o] == 10) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array10, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape10_draw(ans);
                    rotate(transformed_array10, 45);
                    shape10_draw(fans);
                    rotate(ans, -45);
                    shape10_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape10_draw(fans);

                    count10 *= 4;
                }
            } // end of loop
        }
        else
            alert("You cannot apply geometric transformation in Image Mode");
    }


// end of function to split shape in to down four  (case-1)

// start  of function to split shape in to down four  (case-2)
          function split_into_down_fourA4() {
        if (pic_check == 1) {
            p = 0;
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, 500, 500);
            //ctx.drawImage(copycanvas, 0, 0);
            for (var o = 0; o < length_of_arr; o++) {
                if (check22 == 1 && arr[o] == 22) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array22, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    random_drawn(ans);
                    rotate(transformed_array22, -45);
                    random_drawn(fans);
                    rotate(ans, -90);
                    random_drawn(fans);
                    rotate(ans, 135);
                    flag = 1;
                    random_drawn(fans);

                    count22 *= 4;
                }


                if (check1 == 1 && arr[o] == 1) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape1_draw(ans);
                    rotate(transformed_array, -90);
                    shape1_draw(fans);
                    rotate(ans, -45);
                    shape1_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape1_draw(fans);

                    count *= 4;
                }


                if (check2 == 1 && arr[o] == 2) {


                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array2, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape2_draw(ans);
                    rotate(transformed_array2, -90);
                    shape2_draw(fans);
                    rotate(ans, -45);
                    shape2_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape2_draw(fans);
                    count2 *= 4;
                }


                if (check3 == 1 && arr[o] == 3) {



                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array3, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape3_draw(ans);
                    rotate(transformed_array3, -90);
                    shape3_draw(fans);
                    rotate(ans, -45);
                    shape3_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape3_draw(fans);

                    count3 *= 4;
                }



                if (check4 == 1 && arr[o] == 4) {



                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array4, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape4_draw(ans);
                    rotate(transformed_array4, -90);
                    shape4_draw(fans);
                    rotate(ans, -45);
                    shape4_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape4_draw(fans);
                    count4 *= 4;
                }


                if (check5 == 1 && arr[o] == 5) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array5, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape5_draw(ans);
                    rotate(transformed_array5, -90);
                    shape5_draw(fans);
                    rotate(ans, -45);
                    shape5_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape5_draw(fans);

                    count5 *= 4;
                }


                if (check6 == 1 && arr[o] == 6) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array6, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape6_draw(ans);
                    rotate(transformed_array6, -90);
                    shape6_draw(fans);
                    rotate(ans, -45);
                    shape6_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape6_draw(fans);

                    count6 *= 4;
                }


                if (check7 == 1 && arr[o] == 7) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array7, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape7_draw(ans);
                    rotate(transformed_array7, -90);
                    shape7_draw(fans);
                    rotate(ans, -45);
                    shape7_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape7_draw(fans);

                    count7 *= 4;
                }


                if (check8 == 1 && arr[o] == 8) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array8, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape8_draw(ans);
                    rotate(transformed_array8, -90);
                    shape8_draw(fans);
                    rotate(ans, -45);
                    shape8_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape8_draw(fans);

                    count8 *= 4;
                }


                if (check9 == 1 && arr[o] == 9) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array9, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape9_draw(ans);
                    rotate(transformed_array9,-90);
                    shape9_draw(fans);
                    rotate(ans, -45);
                    shape9_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape9_draw(fans);

                    count9 *= 4;
                }


                if (check10 == 1 && arr[o] == 10) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array10, 250, 250, 0.5, 0.5);
                    translate(ans, 0, -125);
                    shape10_draw(ans);
                    rotate(transformed_array10, -90);
                    shape10_draw(fans);
                    rotate(ans, -45);
                    shape10_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape10_draw(fans);

                    count10 *= 4;
                }
            } // end of loop
        }
        else
            alert("You cannot apply geometric transformation in Image Mode");
    }


// end of function to split shape in to down four  (case-2)
 


// start of function to split shape in to down four  (case-3)
           function split_into_down_fourA5() {
        if (pic_check == 1) {
            p = 0;
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, 500, 500);
            //ctx.drawImage(copycanvas, 0, 0);
            for (var o = 0; o < length_of_arr; o++) {
                if (check22 == 1 && arr[o] == 22) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array22, 250, 250, 0.5, 0.5);
                    translate(ans, 0, 125);
                    random_drawn(ans);
                    rotate(transformed_array22, -45);
                    random_drawn(fans);
                    rotate(ans, -90);
                    random_drawn(fans);
                    rotate(ans, 135);
                    flag = 1;
                    random_drawn(fans);

                    count22 *= 4;
                }


                if (check1 == 1 && arr[o] == 1) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array, 250, 250, 0.5, 0.5);
                    translate(ans, 0, 125);
                    shape1_draw(ans);
                    rotate(transformed_array, -90);
                    shape1_draw(fans);
                    rotate(ans, -45);
                    shape1_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape1_draw(fans);

                    count *= 4;
                }


                if (check2 == 1 && arr[o] == 2) {


                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array2, 250, 250, 0.5, 0.5);
                    translate(ans, 0, 125);
                    shape2_draw(ans);
                    rotate(transformed_array2, -90);
                    shape2_draw(fans);
                    rotate(ans, -45);
                    shape2_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape2_draw(fans);
                    count2 *= 4;
                }


                if (check3 == 1 && arr[o] == 3) {



                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array3, 250, 250, 0.5, 0.5);
                    translate(ans, 0, 125);
                    shape3_draw(ans);
                    rotate(transformed_array3, -90);
                    shape3_draw(fans);
                    rotate(ans, -45);
                    shape3_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape3_draw(fans);

                    count3 *= 4;
                }



                if (check4 == 1 && arr[o] == 4) {



                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array4, 250, 250, 0.5, 0.5);
                    translate(ans, 0, 125);
                    shape4_draw(ans);
                    rotate(transformed_array4, -90);
                    shape4_draw(fans);
                    rotate(ans, -45);
                    shape4_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape4_draw(fans);
                    count4 *= 4;
                }


                if (check5 == 1 && arr[o] == 5) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array5, 250, 250, 0.5, 0.5);
                    translate(ans, 0, 125);
                    shape5_draw(ans);
                    rotate(transformed_array5, -90);
                    shape5_draw(fans);
                    rotate(ans, -45);
                    shape5_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape5_draw(fans);

                    count5 *= 4;
                }


                if (check6 == 1 && arr[o] == 6) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array6, 250, 250, 0.5, 0.5);
                    translate(ans, 0, 125);
                    shape6_draw(ans);
                    rotate(transformed_array6, -90);
                    shape6_draw(fans);
                    rotate(ans, -45);
                    shape6_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape6_draw(fans);

                    count6 *= 4;
                }


                if (check7 == 1 && arr[o] == 7) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array7, 250, 250, 0.5, 0.5);
                    translate(ans, 0, 125);
                    shape7_draw(ans);
                    rotate(transformed_array7, -90);
                    shape7_draw(fans);
                    rotate(ans, -45);
                    shape7_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape7_draw(fans);

                    count7 *= 4;
                }


                if (check8 == 1 && arr[o] == 8) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array8, 250, 250, 0.5, 0.5);
                    translate(ans, 0, 125);
                    shape8_draw(ans);
                    rotate(transformed_array8, -90);
                    shape8_draw(fans);
                    rotate(ans, -45);
                    shape8_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape8_draw(fans);

                    count8 *= 4;
                }


                if (check9 == 1 && arr[o] == 9) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array9, 250, 250, 0.5, 0.5);
                    translate(ans, 0, 125);
                    shape9_draw(ans);
                    rotate(transformed_array9, -90);
                    shape9_draw(fans);
                    rotate(ans, -45);
                    shape9_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape9_draw(fans);

                    count9 *= 4;
                }


                if (check10 == 1 && arr[o] == 10) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array10, 250, 250, 0.5, 0.5);
                    translate(ans, 0, 125);
                    shape10_draw(ans);
                    rotate(transformed_array10, -90);
                    shape10_draw(fans);
                    rotate(ans, -45);
                    shape10_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape10_draw(fans);

                    count10 *= 4;
                }
            } // end of loop
        }
        else
            alert("You cannot apply geometric transformation in Image Mode");
    }


// end of function to split shape in to down four  (case-3)


// start of function to split shape in to down four  (case-4)
       
    function split_into_down_fourA6() {
        if (pic_check == 1) {
            p = 0;
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, 500, 500);
            //ctx.drawImage(copycanvas, 0, 0);
            for (var o = 0; o < length_of_arr; o++) {
                if (check22 == 1 && arr[o] == 22) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array22, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    random_drawn(ans);
                    rotate(transformed_array22, -45);
                    random_drawn(fans);
                    rotate(ans, -90);
                    random_drawn(fans);
                    rotate(ans, 135);
                    flag = 1;
                    random_drawn(fans);

                    count22 *= 4;
                }


                if (check1 == 1 && arr[o] == 1) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape1_draw(ans);
                    rotate(transformed_array, -90);
                    shape1_draw(fans);
                    rotate(ans, -45);
                    shape1_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape1_draw(fans);

                    count *= 4;
                }


                if (check2 == 1 && arr[o] == 2) {


                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array2, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape2_draw(ans);
                    rotate(transformed_array2, -90);
                    shape2_draw(fans);
                    rotate(ans, -45);
                    shape2_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape2_draw(fans);
                    count2 *= 4;
                }


                if (check3 == 1 && arr[o] == 3) {



                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array3, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape3_draw(ans);
                    rotate(transformed_array3, -90);
                    shape3_draw(fans);
                    rotate(ans, -45);
                    shape3_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape3_draw(fans);

                    count3 *= 4;
                }



                if (check4 == 1 && arr[o] == 4) {



                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array4, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape4_draw(ans);
                    rotate(transformed_array4, -90);
                    shape4_draw(fans);
                    rotate(ans, -45);
                    shape4_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape4_draw(fans);
                    count4 *= 4;
                }


                if (check5 == 1 && arr[o] == 5) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array5, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape5_draw(ans);
                    rotate(transformed_array5, -90);
                    shape5_draw(fans);
                    rotate(ans, -45);
                    shape5_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape5_draw(fans);

                    count5 *= 4;
                }


                if (check6 == 1 && arr[o] == 6) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array6, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape6_draw(ans);
                    rotate(transformed_array6, -90);
                    shape6_draw(fans);
                    rotate(ans, -45);
                    shape6_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape6_draw(fans);

                    count6 *= 4;
                }


                if (check7 == 1 && arr[o] == 7) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array7, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape7_draw(ans);
                    rotate(transformed_array7, -90);
                    shape7_draw(fans);
                    rotate(ans, -45);
                    shape7_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape7_draw(fans);

                    count7 *= 4;
                }


                if (check8 == 1 && arr[o] == 8) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array8, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape8_draw(ans);
                    rotate(transformed_array8, -90);
                    shape8_draw(fans);
                    rotate(ans, -45);
                    shape8_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape8_draw(fans);

                    count8 *= 4;
                }


                if (check9 == 1 && arr[o] == 9) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array9, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape9_draw(ans);
                    rotate(transformed_array9, -90);
                    shape9_draw(fans);
                    rotate(ans, -45);
                    shape9_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape9_draw(fans);

                    count9 *= 4;
                }


                if (check10 == 1 && arr[o] == 10) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array10, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape10_draw(ans);
                    rotate(transformed_array10, -90);
                    shape10_draw(fans);
                    rotate(ans, -45);
                    shape10_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape10_draw(fans);

                    count10 *= 4;
                }
            } // end of loop
        }
        else
            alert("You cannot apply geometric transformation in Image Mode");
    }


// end of function to split shape in to down four  (case-4)


// start of function to split shape in to down four  (case-5)
	 function split_into_down_fourA7() {
        if (pic_check == 1) {
            p = 0;
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, 500, 500);
            //ctx.drawImage(copycanvas, 0, 0);
            for (var o = 0; o < length_of_arr; o++) {
                if (check22 == 1 && arr[o] == 22) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array22, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    random_drawn(ans);
                    rotate(transformed_array22, -45);
                    random_drawn(fans);
                    rotate(ans, -90);
                    random_drawn(fans);
                    rotate(ans, 135);
                    flag = 1;
                    random_drawn(fans);

                    count22 *= 4;
                }


                if (check1 == 1 && arr[o] == 1) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape1_draw(ans);
                    rotate(transformed_array, -90);
                    shape1_draw(fans);
                    rotate(ans, -45);
                    shape1_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape1_draw(fans);

                    count *= 4;
                }


                if (check2 == 1 && arr[o] == 2) {


                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array2, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape2_draw(ans);
                    rotate(transformed_array2, -90);
                    shape2_draw(fans);
                    rotate(ans, -45);
                    shape2_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape2_draw(fans);
                    count2 *= 4;
                }


                if (check3 == 1 && arr[o] == 3) {



                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array3, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape3_draw(ans);
                    rotate(transformed_array3, -90);
                    shape3_draw(fans);
                    rotate(ans, -45);
                    shape3_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape3_draw(fans);

                    count3 *= 4;
                }



                if (check4 == 1 && arr[o] == 4) {



                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array4, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape4_draw(ans);
                    rotate(transformed_array4, -90);
                    shape4_draw(fans);
                    rotate(ans, -45);
                    shape4_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape4_draw(fans);
                    count4 *= 4;
                }


                if (check5 == 1 && arr[o] == 5) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array5, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape5_draw(ans);
                    rotate(transformed_array5, -90);
                    shape5_draw(fans);
                    rotate(ans, -45);
                    shape5_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape5_draw(fans);

                    count5 *= 4;
                }


                if (check6 == 1 && arr[o] == 6) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array6, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape6_draw(ans);
                    rotate(transformed_array6, -90);
                    shape6_draw(fans);
                    rotate(ans, -45);
                    shape6_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape6_draw(fans);

                    count6 *= 4;
                }


                if (check7 == 1 && arr[o] == 7) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array7, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape7_draw(ans);
                    rotate(transformed_array7, -90);
                    shape7_draw(fans);
                    rotate(ans, -45);
                    shape7_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape7_draw(fans);

                    count7 *= 4;
                }


                if (check8 == 1 && arr[o] == 8) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array8, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape8_draw(ans);
                    rotate(transformed_array8, -90);
                    shape8_draw(fans);
                    rotate(ans, -45);
                    shape8_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape8_draw(fans);

                    count8 *= 4;
                }


                if (check9 == 1 && arr[o] == 9) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array9, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape9_draw(ans);
                    rotate(transformed_array9, -90);
                    shape9_draw(fans);
                    rotate(ans, -45);
                    shape9_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape9_draw(fans);

                    count9 *= 4;
                }


                if (check10 == 1 && arr[o] == 10) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array10, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape10_draw(ans);
                    rotate(transformed_array10, -90);
                    shape10_draw(fans);
                    rotate(ans, -45);
                    shape10_draw(fans);
                    rotate(ans, 135);
                    flag = 1;
                    shape10_draw(fans);

                    count10 *= 4;
                }
            } // end of loop
        }
        else
            alert("You cannot apply geometric transformation in Image Mode");
    }


// end of function to split shape in to down four  (case-5)


// start of function to split shape in to down four  (case-6)
      
    function split_into_down_fourA2() {
        if (pic_check == 1) {
            p = 0;
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, 500, 500);
            //ctx.drawImage(copycanvas, 0, 0);
            for (var o = 0; o < length_of_arr; o++) {
                if (check22 == 1 && arr[o] == 22) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array22, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    random_drawn(ans);
                    rotate(transformed_array22, 180);
                    random_drawn(fans);
                    rotate(ans, 135);
                    random_drawn(fans);
                    rotate(ans, 225);
                    flag = 1;
                    random_drawn(fans);

                    count22 *= 4;
                }


                if (check1 == 1 && arr[o] == 1) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape1_draw(ans);
                    rotate(transformed_array, 135);
                    shape1_draw(fans);
                    rotate(ans, 225);
                    shape1_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape1_draw(fans);

                    count *= 4;
                }


                if (check2 == 1 && arr[o] == 2) {


                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array2, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape2_draw(ans);
                    rotate(transformed_array2, 135);
                    shape2_draw(fans);
                    rotate(ans, 225);
                    shape2_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape2_draw(fans);
                    count2 *= 4;
                }


                if (check3 == 1 && arr[o] == 3) {



                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array3, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape3_draw(ans);
                    rotate(transformed_array3, 135);
                    shape3_draw(fans);
                    rotate(ans, 225);
                    shape3_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape3_draw(fans);

                    count3 *= 4;
                }



                if (check4 == 1 && arr[o] == 4) {



                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array4, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape4_draw(ans);
                    rotate(transformed_array4, 135);
                    shape4_draw(fans);
                    rotate(ans, 225);
                    shape4_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape4_draw(fans);
                    count4 *= 4;
                }


                if (check5 == 1 && arr[o] == 5) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array5, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape5_draw(ans);
                    rotate(transformed_array5, 135);
                    shape5_draw(fans);
                    rotate(ans, 225);
                    shape5_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape5_draw(fans);

                    count5 *= 4;
                }


                if (check6 == 1 && arr[o] == 6) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array6, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape6_draw(ans);
                    rotate(transformed_array6, 135);
                    shape6_draw(fans);
                    rotate(ans, 225);
                    shape6_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape6_draw(fans);

                    count6 *= 4;
                }


                if (check7 == 1 && arr[o] == 7) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array7, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape7_draw(ans);
                    rotate(transformed_array7, 135);
                    shape7_draw(fans);
                    rotate(ans, 225);
                    shape7_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape7_draw(fans);

                    count7 *= 4;
                }


                if (check8 == 1 && arr[o] == 8) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array8, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape8_draw(ans);
                    rotate(transformed_array8, 135);
                    shape8_draw(fans);
                    rotate(ans, 225);
                    shape8_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape8_draw(fans);

                    count8 *= 4;
                }


                if (check9 == 1 && arr[o] == 9) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array9, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape9_draw(ans);
                    rotate(transformed_array9, 135);
                    shape9_draw(fans);
                    rotate(ans, 225);
                    shape9_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape9_draw(fans);

                    count9 *= 4;
                }


                if (check10 == 1 && arr[o] == 10) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array10, 250, 250, 0.5, 0.5);
                    translate(ans, -125, 0);
                    shape10_draw(ans);
                    rotate(transformed_array10, 225);
                    shape10_draw(fans);
                    rotate(ans, 135);
                    shape10_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape10_draw(fans);

                    count10 *= 4;
                }
            } // end of loop
        }
        else
            alert("You cannot apply geometric transformation in Image Mode");
    }

// end of function to split shape in to down four  (case-6)

// start of function to split shape in to down four  (case-7)
 	    function split_into_down_fourA3() {
        if (pic_check == 1) {
            p = 0;
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, 500, 500);
            //ctx.drawImage(copycanvas, 0, 0);
            for (var o = 0; o < length_of_arr; o++) {
                if (check22 == 1 && arr[o] == 22) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array22, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    random_drawn(ans);
                    rotate(transformed_array22, 180);
                    random_drawn(fans);
                    rotate(ans, 135);
                    random_drawn(fans);
                    rotate(ans, 225);
                    flag = 1;
                    random_drawn(fans);

                    count22 *= 4;
                }


                if (check1 == 1 && arr[o] == 1) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape1_draw(ans);
                    rotate(transformed_array, 135);
                    shape1_draw(fans);
                    rotate(ans, 225);
                    shape1_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape1_draw(fans);

                    count *= 4;
                }


                if (check2 == 1 && arr[o] == 2) {


                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array2, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape2_draw(ans);
                    rotate(transformed_array2, 135);
                    shape2_draw(fans);
                    rotate(ans, 225);
                    shape2_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape2_draw(fans);
                    count2 *= 4;
                }


                if (check3 == 1 && arr[o] == 3) {



                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array3, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape3_draw(ans);
                    rotate(transformed_array3, 135);
                    shape3_draw(fans);
                    rotate(ans, 225);
                    shape3_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape3_draw(fans);

                    count3 *= 4;
                }



                if (check4 == 1 && arr[o] == 4) {



                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array4, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape4_draw(ans);
                    rotate(transformed_array4, 135);
                    shape4_draw(fans);
                    rotate(ans, 225);
                    shape4_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape4_draw(fans);
                    count4 *= 4;
                }


                if (check5 == 1 && arr[o] == 5) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array5, 250, 250, 0.5, 0.5);
                    translate(ans,125, 0);
                    shape5_draw(ans);
                    rotate(transformed_array5, 135);
                    shape5_draw(fans);
                    rotate(ans, 225);
                    shape5_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape5_draw(fans);

                    count5 *= 4;
                }


                if (check6 == 1 && arr[o] == 6) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array6, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape6_draw(ans);
                    rotate(transformed_array6, 135);
                    shape6_draw(fans);
                    rotate(ans, 225);
                    shape6_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape6_draw(fans);

                    count6 *= 4;
                }


                if (check7 == 1 && arr[o] == 7) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array7, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape7_draw(ans);
                    rotate(transformed_array7, 135);
                    shape7_draw(fans);
                    rotate(ans, 225);
                    shape7_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape7_draw(fans);

                    count7 *= 4;
                }


                if (check8 == 1 && arr[o] == 8) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array8, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape8_draw(ans);
                    rotate(transformed_array8, 135);
                    shape8_draw(fans);
                    rotate(ans, 225);
                    shape8_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape8_draw(fans);

                    count8 *= 4;
                }


                if (check9 == 1 && arr[o] == 9) {

                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array9, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape9_draw(ans);
                    rotate(transformed_array9, 135);
                    shape9_draw(fans);
                    rotate(ans, 225);
                    shape9_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape9_draw(fans);

                    count9 *= 4;
                }


                if (check10 == 1 && arr[o] == 10) {
                    range = 0;
                    h = 0;
                    flag = 0;
                    scale(transformed_array10, 250, 250, 0.5, 0.5);
                    translate(ans, 125, 0);
                    shape10_draw(ans);
                    rotate(transformed_array10, 225);
                    shape10_draw(fans);
                    rotate(ans, 135);
                    shape10_draw(fans);
                    rotate(ans, 180);
                    flag = 1;
                    shape10_draw(fans);

                    count10 *= 4;
                }
            } // end of loop
        }
        else
            alert("You cannot apply geometric transformation in Image Mode");
    }

// end of function to split shape in to down four  (case-7)


// end of function to split shape in to right four 
   
  function split_into_right_four() {
      if (pic_check == 1) {
          p = 0;
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, 500, 500);
          // ctx.drawImage(copycanvas, 0, 0);
          for (var o = 0; o < length_of_arr; o++) {
              if (check22 == 1 && arr[o] == 22) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array22, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  random_drawn(ans);
                  rotate(transformed_array22, 315);
                  random_drawn(fans);
                  rotate(ans, 270);
                  random_drawn(fans);
                  rotate(ans, 225);
                  flag = 1;
                  random_drawn(fans);

                  count22 *= 4;
              }



              if (check1 == 1 && arr[o] == 1) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape1_draw(ans);
                  rotate(transformed_array, 315);
                  shape1_draw(fans);
                  rotate(ans, 270);
                  shape1_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape1_draw(fans);

                  count *= 4;
              }


              if (check2 == 1 && arr[o] == 2) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array2, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape2_draw(ans);
                  rotate(transformed_array2, 315);
                  shape2_draw(fans);
                  rotate(ans, 270);
                  shape2_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape2_draw(fans);

                  count2 *= 4;
              }


              if (check3 == 1 && arr[o] == 3) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array3, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape3_draw(ans);
                  rotate(transformed_array3, 315);
                  shape3_draw(fans);
                  rotate(ans, 270);
                  shape3_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape3_draw(fans);

                  count3 *= 4;
              }


              if (check4 == 1 && arr[o] == 4) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array4, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape4_draw(ans);
                  rotate(transformed_array4, 315);
                  shape4_draw(fans);
                  rotate(ans, 270);
                  shape4_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape4_draw(fans);

                  count4 *= 4;
              }



              if (check5 == 1 && arr[o] == 5) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array5, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape5_draw(ans);
                  rotate(transformed_array5, 315);
                  shape5_draw(fans);
                  rotate(ans, 270);
                  shape5_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape5_draw(fans);

                  count5 *= 4;
              }


              if (check6 == 1 && arr[o] == 6) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array6, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape6_draw(ans);
                  rotate(transformed_array6, 315);
                  shape6_draw(fans);
                  rotate(ans, 270);
                  shape6_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape6_draw(fans);

                  count6 *= 4;
              }



              if (check7 == 1 && arr[o] == 7) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array7, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape7_draw(ans);
                  rotate(transformed_array7, 315);
                  shape7_draw(fans);
                  rotate(ans, 270);
                  shape7_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape7_draw(fans);

                  count7 *= 4;
              }



              if (check8 == 1 && arr[o] == 8) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array8, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape8_draw(ans);
                  rotate(transformed_array8, 315);
                  shape8_draw(fans);
                  rotate(ans, 270);
                  shape8_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape8_draw(fans);

                  count8 *= 4;
              }



              if (check9 == 1 && arr[o] == 9) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array9, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape9_draw(ans);
                  rotate(transformed_array9, 315);
                  shape9_draw(fans);
                  rotate(ans, 270);
                  shape9_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape9_draw(fans);

                  count9 *= 4;
              }


              if (check10 == 1 && arr[o] == 10) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array10, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape10_draw(ans);
                  rotate(transformed_array10, 315);
                  shape10_draw(fans);
                  rotate(ans, 270);
                  shape10_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape10_draw(fans);

                  count10 *= 4;
              }

          } //end of loop
      }
      else
          alert("You cannot apply geometric transformation in Image Mode");

  }

// end of function to split shape in to right four  

// start of function to split shape in to right three
      
  function split_into_right_three() {
      if (pic_check == 1) {
          p = 0;
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, 500, 500);
          // ctx.drawImage(copycanvas, 0, 0);
          for (var o = 0; o < length_of_arr; o++) {
              if (check22 == 1 && arr[o] == 22) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array22, 250, 250, 0.5, 0.5);
                  translate(ans,-125,0);
                  random_drawn(ans);
                  rotate(transformed_array22, 45);
                  random_drawn(fans);
                  rotate(ans,-45);
                  flag = 1;
                  random_drawn(fans);

                  count22 *= 4;
              }



              if (check1 == 1 && arr[o] == 1) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array, 250, 250, 0.5, 0.5);
                  translate(ans, -125, 0);
                  shape1_draw(ans);
                  rotate(transformed_array, 345);
                  shape1_draw(fans);
                  rotate(ans, -45);
                  flag = 1;
                  shape1_draw(fans);

                  count *= 4;
              }


              if (check2 == 1 && arr[o] == 2) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array2, 250, 250, 0.5, 0.5);
                  translate(ans, -125, 0);
                  shape2_draw(ans);
                  rotate(transformed_array2,45);
                  shape2_draw(fans);
                 // rotate(ans, -45);
                 // shape2_draw(fans);
                  rotate(ans, -45);
                  flag = 1;
                  shape2_draw(fans);

                  count2 *= 4;
              }


              if (check3 == 1 && arr[o] == 3) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array3, 250, 250, 0.5, 0.5);
                  translate(ans, -125, 0);
                  shape3_draw(ans);
                  rotate(transformed_array3, 45);
                  shape3_draw(fans);
                  rotate(ans, -45);
                  flag = 1;
                  shape3_draw(fans);

                  count3 *= 4;
              }


              if (check4 == 1 && arr[o] == 4) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array4, 250, 250, 0.5, 0.5);
                  translate(ans, -125, 0);
                  shape4_draw(ans);
                  rotate(transformed_array4, 45);
                  shape4_draw(fans);
                  rotate(ans,-45);
                  flag = 1;
                  shape4_draw(fans);

                  count4 *= 4;
              }



              if (check5 == 1 && arr[o] == 5) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array5, 250, 250, 0.5, 0.5);
                  translate(ans, -125, 0);
                  shape5_draw(ans);
                  rotate(transformed_array5, 45);
                  shape5_draw(fans);
                  rotate(ans, -45);
                  flag = 1;
                  shape5_draw(fans);

                  count5 *= 4;
              }


              if (check6 == 1 && arr[o] == 6) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array6, 250, 250, 0.5, 0.5);
                  translate(ans, -125, 0);
                  shape6_draw(ans);
                  rotate(transformed_array6, 45);
                  shape6_draw(fans);
                  rotate(ans, -45);
                  flag = 1;
                  shape6_draw(fans);

                  count6 *= 4;
              }



              if (check7 == 1 && arr[o] == 7) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array7, 250, 250, 0.5, 0.5);
                  translate(ans, -125, 0);
                  shape7_draw(ans);
                  rotate(transformed_array7, 45);
                  shape7_draw(fans);
                   rotate(ans, -45);
                  flag = 1;
                  shape7_draw(fans);

                  count7 *= 4;
              }



              if (check8 == 1 && arr[o] == 8) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array8, 250, 250, 0.5, 0.5);
                  translate(ans, -125, 0);
                  shape8_draw(ans);
                  rotate(transformed_array8, 315);
                  shape8_draw(fans);
                  rotate(ans, 270);
                  shape8_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape8_draw(fans);

                  count8 *= 4;
              }



              if (check9 == 1 && arr[o] == 9) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array9, 250, 250, 0.5, 0.5);
                  translate(ans, -125, 0);
                  shape9_draw(ans);
                  rotate(transformed_array9,45);
                  shape9_draw(fans);
                  rotate(ans, -45);
                  flag = 1;
                  shape9_draw(fans);

                  count9 *= 4;
              }


              if (check10 == 1 && arr[o] == 10) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array10, 250, 250, 0.5, 0.5);
                  translate(ans, -125, 0);
                  shape10_draw(ans);
                  rotate(transformed_array10, 45);
                  shape10_draw(fans);
                   rotate(ans, -45);
                  flag = 1;
                  shape10_draw(fans);

                  count10 *= 4;
              }

          } //end of loop
      }
      else
          alert("You cannot apply geometric transformation in Image Mode");

  }

// end of function to split shape in to right three  


// start of function to split shape in to left four 
     function split_into_left_four() {
      if (pic_check == 1) {
          p = 0;
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, 500, 500);
          // ctx.drawImage(copycanvas, 0, 0);
          for (var o = 0; o < length_of_arr; o++) {
              if (check22 == 1 && arr[o] == 22) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array22, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  random_drawn(ans);
                  rotate(transformed_array22, -315);
                  random_drawn(fans);
                  rotate(ans, -270);
                  random_drawn(fans);
                  rotate(ans, -225);
                  flag = 1;
                  random_drawn(fans);

                  count22 *= 4;
              }



              if (check1 == 1 && arr[o] == 1) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape1_draw(ans);
                  rotate(transformed_array, -315);
                  shape1_draw(fans);
                  rotate(ans, -270);
                  shape1_draw(fans);
                  rotate(ans, -225);
                  flag = 1;
                  shape1_draw(fans);

                  count *= 4;
              }


              if (check2 == 1 && arr[o] == 2) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array2, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape2_draw(ans);
                  rotate(transformed_array2, -315);
                  shape2_draw(fans);
                  rotate(ans, -270);
                  shape2_draw(fans);
                  rotate(ans, -225);
                  flag = 1;
                  shape2_draw(fans);

                  count2 *= 4;
              }


              if (check3 == 1 && arr[o] == 3) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array3, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape3_draw(ans);
                  rotate(transformed_array3, 315);
                  shape3_draw(fans);
                  rotate(ans, 270);
                  shape3_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape3_draw(fans);

                  count3 *= 4;
              }


              if (check4 == 1 && arr[o] == 4) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array4, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape4_draw(ans);
                  rotate(transformed_array4, 315);
                  shape4_draw(fans);
                  rotate(ans, 270);
                  shape4_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape4_draw(fans);

                  count4 *= 4;
              }



              if (check5 == 1 && arr[o] == 5) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array5, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape5_draw(ans);
                  rotate(transformed_array5, 315);
                  shape5_draw(fans);
                  rotate(ans, 270);
                  shape5_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape5_draw(fans);

                  count5 *= 4;
              }


              if (check6 == 1 && arr[o] == 6) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array6, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape6_draw(ans);
                  rotate(transformed_array6, 315);
                  shape6_draw(fans);
                  rotate(ans, 270);
                  shape6_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape6_draw(fans);

                  count6 *= 4;
              }



              if (check7 == 1 && arr[o] == 7) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array7, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape7_draw(ans);
                  rotate(transformed_array7, 315);
                  shape7_draw(fans);
                  rotate(ans, 270);
                  shape7_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape7_draw(fans);

                  count7 *= 4;
              }



              if (check8 == 1 && arr[o] == 8) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array8, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape8_draw(ans);
                  rotate(transformed_array8, 315);
                  shape8_draw(fans);
                  rotate(ans, 270);
                  shape8_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape8_draw(fans);

                  count8 *= 4;
              }



              if (check9 == 1 && arr[o] == 9) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array9, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape9_draw(ans);
                  rotate(transformed_array9, 315);
                  shape9_draw(fans);
                  rotate(ans, 270);
                  shape9_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape9_draw(fans);

                  count9 *= 4;
              }


              if (check10 == 1 && arr[o] == 10) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array10, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape10_draw(ans);
                  rotate(transformed_array10, 315);
                  shape10_draw(fans);
                  rotate(ans, 270);
                  shape10_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape10_draw(fans);

                  count10 *= 4;
              }

          } //end of loop
      }
      else
          alert("You cannot apply geometric transformation in Image Mode");

  }

// end of function to split shape in to left four 

// start of function to split shape in to left three
     
  function split_into_left_three() {
      if (pic_check == 1) {
          p = 0;
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, 500, 500);
          // ctx.drawImage(copycanvas, 0, 0);
          for (var o = 0; o < length_of_arr; o++) {
              if (check22 == 1 && arr[o] == 22) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array22, 250, 250, 0.5, 0.5);
                  translate(ans, 125, 0);
                  random_drawn(ans);
                  rotate(transformed_array22, 45);
                  random_drawn(fans);
                  rotate(ans, -45);
                  flag = 1;
                  random_drawn(fans);

                  count22 *= 4;
              }



              if (check1 == 1 && arr[o] == 1) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array, 250, 250, 0.5, 0.5);
                  translate(ans, 125, 0);
                  shape1_draw(ans);
                  rotate(transformed_array, 345);
                  shape1_draw(fans);
                  rotate(ans, -45);
                  flag = 1;
                  shape1_draw(fans);

                  count *= 4;
              }


              if (check2 == 1 && arr[o] == 2) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array2, 250, 250, 0.5, 0.5);
                  translate(ans, 125, 0);
                  shape2_draw(ans);
                  rotate(transformed_array2, 45);
                  shape2_draw(fans);
                  // rotate(ans, -45);
                  // shape2_draw(fans);
                  rotate(ans, -45);
                  flag = 1;
                  shape2_draw(fans);

                  count2 *= 4;
              }


              if (check3 == 1 && arr[o] == 3) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array3, 250, 250, 0.5, 0.5);
                  translate(ans, 125, 0);
                  shape3_draw(ans);
                  rotate(transformed_array3, 45);
                  shape3_draw(fans);
                  rotate(ans, -45);
                  flag = 1;
                  shape3_draw(fans);

                  count3 *= 4;
              }


              if (check4 == 1 && arr[o] == 4) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array4, 250, 250, 0.5, 0.5);
                  translate(ans, 125, 0);
                  shape4_draw(ans);
                  rotate(transformed_array4, 45);
                  shape4_draw(fans);
                  rotate(ans, -45);
                  flag = 1;
                  shape4_draw(fans);

                  count4 *= 4;
              }



              if (check5 == 1 && arr[o] == 5) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array5, 250, 250, 0.5, 0.5);
                  translate(ans, 125, 0);
                  shape5_draw(ans);
                  rotate(transformed_array5, 45);
                  shape5_draw(fans);
                  rotate(ans, -45);
                  flag = 1;
                  shape5_draw(fans);

                  count5 *= 4;
              }


              if (check6 == 1 && arr[o] == 6) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array6, 250, 250, 0.5, 0.5);
                  translate(ans, 125, 0);
                  shape6_draw(ans);
                  rotate(transformed_array6, 45);
                  shape6_draw(fans);
                  rotate(ans, -45);
                  flag = 1;
                  shape6_draw(fans);

                  count6 *= 4;
              }



              if (check7 == 1 && arr[o] == 7) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array7, 250, 250, 0.5, 0.5);
                  translate(ans, 125, 0);
                  shape7_draw(ans);
                  rotate(transformed_array7, 45);
                  shape7_draw(fans);
                  rotate(ans, -45);
                  flag = 1;
                  shape7_draw(fans);

                  count7 *= 4;
              }



              if (check8 == 1 && arr[o] == 8) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array8, 250, 250, 0.5, 0.5);
                  translate(ans, 125, 0);
                  shape8_draw(ans);
                  rotate(transformed_array8, 315);
                  shape8_draw(fans);
                  rotate(ans, 270);
                  shape8_draw(fans);
                  rotate(ans, 225);
                  flag = 1;
                  shape8_draw(fans);

                  count8 *= 4;
              }



              if (check9 == 1 && arr[o] == 9) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array9, 250, 250, 0.5, 0.5);
                  translate(ans, 125, 0);
                  shape9_draw(ans);
                  rotate(transformed_array9, 45);
                  shape9_draw(fans);
                  rotate(ans, -45);
                  flag = 1;
                  shape9_draw(fans);

                  count9 *= 4;
              }


              if (check10 == 1 && arr[o] == 10) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array10, 250, 250, 0.5, 0.5);
                  translate(ans, 125, 0);
                  shape10_draw(ans);
                  rotate(transformed_array10, 45);
                  shape10_draw(fans);
                  rotate(ans, -45);
                  flag = 1;
                  shape10_draw(fans);

                  count10 *= 4;
              }

          } //end of loop
      }
      else
          alert("You cannot apply geometric transformation in Image Mode");

  }


// end of function to split shape in to left three


// end of function to split shape in to six
   function split_into_six()
  {
  if (pic_check == 1) {
          p = 0;
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, 500, 500);
          // ctx.drawImage(copycanvas, 0, 0);
          for (var o = 0; o < length_of_arr; o++) {
              if (check22 == 1 && arr[o] == 22) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array22, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  random_drawn(ans);
                  rotate(transformed_array22, 45);
                  random_drawn(fans);
                  rotate(ans, 90);
                  random_drawn(fans);
                  rotate(ans, 180);
                  random_drawn(fans);
                  rotate(ans, 225);
                  random_drawn(fans);
                  rotate(ans, 315); flag = 1;
                  random_drawn(fans);

                  count22 *= 6;
              }


              if (check1 == 1 && arr[o] == 1) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape1_draw(ans);
                  rotate(transformed_array, 45);
                  shape1_draw(fans);
                  rotate(ans, 90);
                  shape1_draw(fans);
                  rotate(ans, 180);
                  shape1_draw(fans);
                  rotate(ans, 225);
                  shape1_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape1_draw(fans);
                  count *= 6;
              }


              if (check2 == 1 && arr[o] == 2) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array2, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape2_draw(ans);
                  rotate(transformed_array2, 45);
                  shape2_draw(fans);
                  rotate(ans, 90);
                  shape2_draw(fans);
                  rotate(ans, 180);
                  shape2_draw(fans);
                  rotate(ans, 225);
                  shape2_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape2_draw(fans);
                  count2 *= 6;
              }


              if (check3 == 1 && arr[o] == 3) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array3, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape3_draw(ans);
                  rotate(transformed_array3, 45);
                  shape3_draw(fans);
                  rotate(ans, 90);
                  shape3_draw(fans);
                  rotate(ans, 180);
                  shape3_draw(fans);
                  rotate(ans, 225);
                  shape3_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape3_draw(fans);
                  count3 *= 6;
              }


              if (check4 == 1 && arr[o] == 4) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array4, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape4_draw(ans);
                  rotate(transformed_array4, 45);
                  shape4_draw(fans);
                  rotate(ans, 90);
                  shape4_draw(fans);
                  rotate(ans, 180);
                  shape4_draw(fans);
                  rotate(ans, 225);
                  shape4_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape4_draw(fans);
                  count4 *= 6;
              }


              if (check5 == 1 && arr[o] == 5) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array5, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape5_draw(ans);
                  rotate(transformed_array5, 45);
                  shape5_draw(fans);
                  rotate(ans, 90);
                  shape5_draw(fans);
                  rotate(ans, 180);
                  shape5_draw(fans);
                  rotate(ans, 225);
                  shape5_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape5_draw(fans);
                  count5 *= 6;
              }


              if (check6 == 1 && arr[o] == 6) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array6, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape6_draw(ans);
                  rotate(transformed_array6, 45);
                  shape6_draw(fans);
                  rotate(ans, 90);
                  shape6_draw(fans);
                  rotate(ans, 180);
                  shape6_draw(fans);
                  rotate(ans, 225);
                  shape6_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape6_draw(fans);
                  count6 *= 6;
              }


              if (check7 == 1 && arr[o] == 7) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array7, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape7_draw(ans);
                  rotate(transformed_array7, 45);
                  shape7_draw(fans);
                  rotate(ans, 90);
                  shape7_draw(fans);
                  rotate(ans, 180);
                  shape7_draw(fans);
                  rotate(ans, 225);
                  shape7_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape7_draw(fans);
                  count7 *= 6;
              }


              if (check8 == 1 && arr[o] == 8) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array8, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape8_draw(ans);
                  rotate(transformed_array8, 45);
                  shape8_draw(fans);
                  rotate(ans, 90);
                  shape8_draw(fans);
                  rotate(ans, 180);
                  shape8_draw(fans);
                  rotate(ans, 225);
                  shape8_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape8_draw(fans);
                  count8 *= 6;
              }



              if (check9 == 1 && arr[o] == 9) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array9, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape9_draw(ans);
                  rotate(transformed_array9, 45);
                  shape9_draw(fans);
                  rotate(ans, 90);
                  shape9_draw(fans);
                  rotate(ans, 180);
                  shape9_draw(fans);
                  rotate(ans, 225);
                  shape9_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape9_draw(fans);
                  count9 *= 6;
              }


              if (check10 == 1 && arr[o] == 10) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array10, 250, 250, 0.5, 0.5);
                  translate(ans, 0, -125);
                  shape10_draw(ans);
                  rotate(transformed_array10, 45);
                  shape10_draw(fans);
                  rotate(ans, 90);
                  shape10_draw(fans);
                  rotate(ans, 180);
                  shape10_draw(fans);
                  rotate(ans, 225);
                  shape10_draw(fans);
                  rotate(ans, 315); flag = 1;
                  shape10_draw(fans);
                  count10 *= 6;
              }
          } //end of loop
      }
      else
          alert("You cannot apply geometric transformation in Image Mode");
   }


// end of function to split shape in to six


// start of function to split shape in to multiple
      

  function split_into_multiple() {
      if (pic_check == 1) {
          p = 0;
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, 500, 500);
          // ctx.drawImage(copycanvas, 0, 0);
          for (var o = 0; o < length_of_arr; o++) {
              if (check1 == 1 && arr[o] == 1) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array, 250, 250, 0.5, 0.5);
                  translate(ans, -125, -125);
                  shape1_draw(ans);
                  translate(ans, 250, -0);
                  shape1_draw(ans);
                  translate(ans, 0, 250);
                  shape1_draw(ans);
                  translate(ans, -250, 0); flag = 1;
                  shape1_draw(ans);
                  count *= 4;
              }


              if (check2 == 1 && arr[o] == 2) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array2, 250, 250, 0.5, 0.5);
                  translate(ans, -125, -125);
                  shape2_draw(ans);
                  translate(ans, 250, -0);
                  shape2_draw(ans);
                  translate(ans, 0, 250);
                  shape2_draw(ans);
                  translate(ans, -250, 0); flag = 1;
                  shape2_draw(ans);
                  count2 *= 4;
              }

              if (check3 == 1 && arr[o] == 3) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array3, 250, 250, 0.5, 0.5);
                  translate(ans, -125, -125);
                  shape3_draw(ans);
                  translate(ans, 250, -0);
                  shape3_draw(ans);
                  translate(ans, 0, 250);
                  shape3_draw(ans);
                  translate(ans, -250, 0); flag = 1;
                  shape3_draw(ans);
                  count3 *= 4;
              }


              if (check4 == 1 && arr[o] == 4) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array4, 250, 250, 0.5, 0.5);
                  translate(ans, -125, -125);
                  shape4_draw(ans);
                  translate(ans, 250, -0);
                  shape4_draw(ans);
                  translate(ans, 0, 250);
                  shape4_draw(ans);
                  translate(ans, -250, 0); flag = 1;
                  shape4_draw(ans);
                  count4 *= 4;
              }


              if (check5 == 1 && arr[o] == 5) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array5, 250, 250, 0.5, 0.5);
                  translate(ans, -125, -125);
                  shape5_draw(ans);
                  translate(ans, 250, -0);
                  shape5_draw(ans);
                  translate(ans, 0, 250);
                  shape5_draw(ans);
                  translate(ans, -250, 0); flag = 1;
                  shape5_draw(ans);
                  count5 *= 4;
              }

              if (check6 == 1 && arr[o] == 6) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array6, 250, 250, 0.5, 0.5);
                  translate(ans, -125, -125);
                  shape6_draw(ans);
                  translate(ans, 250, -0);
                  shape6_draw(ans);
                  translate(ans, 0, 250);
                  shape6_draw(ans);
                  translate(ans, -250, 0); flag = 1;
                  shape6_draw(ans);
                  count6 *= 4;
              }


              if (check7 == 1 && arr[o] == 7) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array7, 250, 250, 0.5, 0.5);
                  translate(ans, -125, -125);
                  shape7_draw(ans);
                  translate(ans, 250, -0);
                  shape7_draw(ans);
                  translate(ans, 0, 250);
                  shape7_draw(ans);
                  translate(ans, -250, 0); flag = 1;
                  shape7_draw(ans);
                  count7 *= 4;
              }


              if (check8 == 1 && arr[o] == 8) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array8, 250, 250, 0.5, 0.5);
                  translate(ans, -125, -125);
                  shape8_draw(ans);
                  translate(ans, 250, -0);
                  shape8_draw(ans);
                  translate(ans, 0, 250);
                  shape8_draw(ans);
                  translate(ans, -250, 0); flag = 1;
                  shape8_draw(ans);
                  count8 *= 4;
              }



              if (check9 == 1 && arr[o] == 9) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array9, 250, 250, 0.5, 0.5);
                  translate(ans, -125, -125);
                  shape9_draw(ans);
                  translate(ans, 250, -0);
                  shape9_draw(ans);
                  translate(ans, 0, 250);
                  shape9_draw(ans);
                  translate(ans, -250, 0); flag = 1;
                  shape9_draw(ans);
                  count9 *= 4;
              }




              if (check10 == 1 && arr[o] == 10) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array10, 250, 250, 0.5, 0.5);
                  translate(ans, -125, -125);
                  shape10_draw(ans);
                  translate(ans, 250, -0);
                  shape10_draw(ans);
                  translate(ans, 0, 250);
                  shape10_draw(ans);
                  translate(ans, -250, 0); flag = 1;
                  shape10_draw(ans);
                  count10 *= 4;
              }

              if (check22 == 1 && arr[o] == 22) {
                  range = 0;
                  h = 0;
                  flag = 0;
                  scale(transformed_array22, 250, 250, 0.5, 0.5);
                  translate(ans, -125, -125);
                  random_drawn(ans);
                  translate(ans, 250, -0);
                  random_drawn(ans);
                  translate(ans, 0, 250);
                  random_drawn(ans);
                  translate(ans, -250, 0); flag = 1;
                  random_drawn(ans);
                  count22 *= 4;
              }


          } // end of loop
      }
      else
          alert("You cannot apply geometric tranformation in Image Mode");


}

// end of function to split shape in to multiple


// start of scaling
    function scale(points_to_scale,fixx,fixy,sclx,scly)
   {
  scaling[0][0] = sclx;  scaling[0][1] = 0;    scaling[0][2] =  fixx*(1-sclx);
  scaling[1][0] = 0;    scaling[1][1] = scly;  scaling[1][2] =  fixy*(1-scly);
  scaling[2][0] = 0;    scaling[2][1] = 0;    scaling[2][2] = 1;


  for(i=0;i<3;i++)
  {
  for(j=0;j<points_to_scale[0].length;j++)
   {
  
   ans[i][j] = (scaling[i][0] * points_to_scale[0][j])+(scaling[i][1] * points_to_scale[1][j])+(scaling[i][2] * points_to_scale[2][j]);
           
                  }
                      }
  
     }

// end of scaling function


// start of rotation function
     function rotate(points_to_rotate,angle) 
   {
    

  rotation[0][0] = Math.cos(angle*3.142/180);  rotation[0][1] = -Math.sin(angle*3.142/180);    rotation[0][2] = (250*(1-Math.cos(angle*3.142/180))+250*Math.sin(angle*3.142/180));;
  rotation[1][0] = Math.sin(angle*3.142/180);  rotation[1][1] =  Math.cos(angle*3.142/180);   rotation[1][2] = ((-250*Math.sin(angle*3.142/180))+(250*(1-Math.cos(angle*3.142/180))));
  rotation[2][0] = 0;   rotation[2][1] = 0;    rotation[2][2] = 1;



  for(i=0;i<3;i++)
  {
  for(j=0;j<points_to_rotate[0].length;j++)
   {
  
   fans[i][j] = (rotation[i][0] *  points_to_rotate[0][j])+(rotation[i][1] * points_to_rotate[1][j])+(rotation[i][2] * points_to_rotate[2][j]);
            
                 }
                      }
   
 
   }
// end of rotation function

//start of translation function
 
   function translate(points_to_translate,cordx,cordy)  // cordx = 0 and cordy = -100
   {
   translation[2][0] = 0;    translation[2][1] = 0;    translation[2][2] = 1;
   translation[0][0] = 1;    translation[0][1] = 0;    translation[0][2] = cordx;
   translation[1][0] = 0;    translation[1][1] = 1;    translation[1][2] = cordy;
   
  for(i=0;i<3;i++)
   {
   for(j=0;j<points_to_translate[0].length;j++)
    {
   
    ans[i][j] = (translation[i][0] * points_to_translate[0][j])+(translation[i][1] * points_to_translate[1][j])+(translation[i][2] * points_to_translate[2][j]);
            
                 }
                      }

   }

//end of translation function