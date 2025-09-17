//start of shape 1 points calculation function 

 function shape1_points(a,b,c,d)
 {
   
 z1++;
  check1 =1;
    //sclr1 = cv1; 
  midx = (a + c)/2;
  midy = (b + d)/2;

  quar_midx = (a + midx)/2;
  quar_midy = (b + midy)/2;

  half_quar_midx = (a + quar_midx)/2;
  half_quar_midy = (b + quar_midy)/2;

  temp1_midx = midx + half_quar_midx-a;
  temp1_midy = midy + half_quar_midy-b;

  temp_midx = quar_midx + half_quar_midx-a;
  temp_midy = quar_midy + half_quar_midy-b;

 
  x1 = a;        
  y1 = temp_midy;

  x2 = temp_midx;
  y2 = temp_midy;

  x3 = temp1_midx;
  y3 = temp1_midy;

  x4 = c;
  y4 = temp1_midy;

  x5 = c - (half_quar_midx-a);
  y5 = midy;


  x6 = c;
  y6 = temp_midy;
  

  x7 = midx + half_quar_midx-a;
  y7 = temp_midy;

  
  x8 = half_quar_midx + quar_midx-a;
  y8 = midy + half_quar_midy-b;

  x9 = a;
  y9 = midy + half_quar_midy-b;

  x10 = half_quar_midx;
  y10 = midy;



  x11 = x2;
  y11 = b;

  x12 = midx
  y12 = half_quar_midy;

  x13 = x3;
  y13 = b;

  x14 = x7;
  y14 = y7;

  x15 = x8;
  y15 = y8;

  x16 = x8;
  y16 = d;

  x17 = midx;
  y17 = d - ( half_quar_midy - b);

  x18 = x3;
  y18 = d;

  x19 = x3;
  y19 = y3;

  x20 = x2;
  y20 = y2;


  for(i =0; i<20;i++)
  {
  shape1[2][i] = 1;
  

  }  

 
  shape1[0][0] = a;        
  shape1[1][0] = temp_midy;
  

  shape1[0][1] = temp_midx;
  shape1[1][1]= temp_midy;

  shape1[0][2] = temp1_midx;
  shape1[1][2] = temp1_midy;

  shape1[0][3] = c;
  shape1[1][3] = temp1_midy;

  shape1[0][4] = c - (half_quar_midx-a);
  shape1[1][4] = midy;


  shape1[0][5] = c;
  shape1[1][5] = temp_midy;
  

  shape1[0][6] = midx + half_quar_midx-a;
  shape1[1][6] = temp_midy;

  
  shape1[0][7] = half_quar_midx + quar_midx-a;
  shape1[1][7] = midy + half_quar_midy-b;

  shape1[0][8]= a;
  shape1[1][8] = midy + half_quar_midy-b;

  shape1[0][9] = half_quar_midx;
  shape1[1][9] = midy;



  shape1[0][10] = x2;
  shape1[1][10] = b;

  shape1[0][11] = midx
  shape1[1][11] = half_quar_midy;

  shape1[0][12] = x3;
  shape1[1][12] = b;

  shape1[0][13] = x7;
  shape1[1][13] = y7;

  shape1[0][14] = x8;
  shape1[1][14] = y8;

  shape1[0][15] = x8;
  shape1[1][15] = d;

  shape1[0][16] = midx;
  shape1[1][16] = d - ( half_quar_midy - b);

  shape1[0][17] = x3;
  shape1[1][17] = d;

  shape1[0][18] = x3;
  shape1[1][18] = y3;

  shape1[0][19] = x2;
  shape1[1][19] = y2;
  p=1;
   
if(z1<2) {
    arr[length_of_arr++] = 1;
 k=20;
 count=20
 range=0; 
 h=0;  
 flag=1;
 if(selection==0)
 shape1_draw(shape1);
 else if(selection==1)
 shape1_drawM(shape1);
 
  }

 else
  {
  flag=1;
   
  h=0;
  range=1;
  if(selection==0)
 shape1_draw(shape1);
 else if(selection==1)
 shape1_drawM(shape1);
   count+=20;
        }
 
  
  }


//end of shape 1 points calculation function 


//start of shape 2 points calculation function 
  
  function shape2_points(a,b,c,d)
  {
  z2++;
   check2 =1;
sclr2 = '#'+cv1;
   midx = (a + c)/2;
   midy = (b + d)/2;

  half_midx = (a + midx)/2;
  half_midy = (b + midy)/2;

  quar_half_midx = (a + half_midx)/2;
  quar_half_midy = (b + half_midy)/2;

  /*temp1_midx = midx + half_quar_midx-a;
  temp1_midy = midy + half_quar_midy-b;

  temp_midx = quar_midx + half_quar_midx-a;
  temp_midy = quar_midy + half_quar_midy-b; */


  shape2[0][0] = a;        
  shape2[1][0] = midy;
  

  shape2[0][1] = half_midx;
  shape2[1][1]= midy - quar_half_midy;

  shape2[0][2] = midx;
  shape2[1][2] = midy;

  shape2[0][3] = midx + half_midx;
  shape2[1][3] = midy + quar_half_midy;

  shape2[0][4] = c;
  shape2[1][4] = midy;


  shape2[0][5] = c - half_midx;
  shape2[1][5] = midy - quar_half_midy;
  

  shape2[0][6] = midx;
  shape2[1][6] = midy;

  
  shape2[0][7] = midx;
  shape2[1][7] = midy;

  shape2[0][8]=  midx;
  shape2[1][8] = midy;

  shape2[0][9] = half_midx;
  shape2[1][9] = midy + quar_half_midy;



  shape2[0][10] = midx;
  shape2[1][10] = b;

  shape2[0][11] = midx  + quar_half_midx;
  shape2[1][11] = half_midy;

  shape2[0][12] = midx;
  shape2[1][12] = midy;

  shape2[0][13] = midx - quar_half_midx;
  shape2[1][13] = d - half_midy;

  shape2[0][14] = midx;
  shape2[1][14] = d;

  shape2[0][15] = midx + quar_half_midx;
  shape2[1][15] = half_midy + midy;

  shape2[0][16] = midx;
  shape2[1][16] = midy;

  shape2[0][17] = midx;
  shape2[1][17] = midy;

  shape2[0][18] = midx;
  shape2[1][18] = midy;

  shape2[0][19] = midx- quar_half_midx;
  shape2[1][19] = half_midy;
  p=1;
  if(z2<2) {
      arr[length_of_arr++] = 2;
 count2=20
 range=0; 
 h=0;  
 flag=1;
 if (selection == 0)
     shape2_draw(shape2);
 else if (selection == 1)
     shape2_drawM(shape2);
  }

 else
  {
  flag=1;
   
  h=0;
  range=1;
  if (selection == 0)
      shape2_draw(shape2);
  else if (selection == 1)
      shape2_drawM(shape2);
   count2+=20;
        }

  }

  

//end of shape 2 points calculation function 

//start of shape 3 points calculation function 
    function shape3_points(a,b,c,d)
  {
 z3++;
  sclr3 = '#'+cv1;
  check3 =1;
   midx = (a + c)/2;
   midy = (b + d)/2;

  half_midx = (a + midx)/2;
  half_midy = (b + midy)/2;

  quar_half_midx = (a + half_midx)/2;
  quar_half_midy = (b + half_midy)/2;

  most_half_midx = (a + quar_half_midx)/2;
  most_half_midy = (b + quar_half_midy)/2;
  
  shape3[0][0] = a;        
  shape3[1][0] = midy;
  

  shape3[0][1] = quar_half_midx;
  shape3[1][1]= midy - quar_half_midy;

  shape3[0][2] = half_midx - most_half_midx;
  shape3[1][2] = midy - most_half_midy;

  shape3[0][3] = half_midx;
  shape3[1][3] = midy - quar_half_midy;

  shape3[0][4] = midx + half_midx ;
  shape3[1][4] = midy + quar_half_midy;

  shape3[0][5] = c - (quar_half_midx + most_half_midx);
  shape3[1][5] = midy + most_half_midy;
  

  shape3[0][6] = c - quar_half_midx;
  shape3[1][6] = midy + quar_half_midy;

  
  shape3[0][7] = c;
  shape3[1][7] = midy;

  shape3[0][8]=  c - quar_half_midx;
  shape3[1][8] = midy - quar_half_midy;

  shape3[0][9] = c - (quar_half_midx + most_half_midx);
  shape3[1][9] = midy - most_half_midy;



  shape3[0][10] = midx + half_midx;
  shape3[1][10] = midy - quar_half_midy;

  shape3[0][11] = half_midx;
  shape3[1][11] = midy + quar_half_midy;

  shape3[0][12] = half_midx - most_half_midx;
  shape3[1][12] = midy + most_half_midy;

  shape3[0][13] = quar_half_midx;
  shape3[1][13] = midy + quar_half_midy;




  shape3[0][14] = midx;
  shape3[1][14] = b;
  
  shape3[0][15] = midx + quar_half_midx;
  shape3[1][15] = quar_half_midy;

  shape3[0][16] = midx + most_half_midx;
  shape3[1][16] = quar_half_midy + most_half_midy;

  shape3[0][17] = midx + quar_half_midx;
  shape3[1][17] = half_midy;

  shape3[0][18] = midx - quar_half_midx;
  shape3[1][18] = midy + half_midy;

  shape3[0][19] = midx- most_half_midx;
  shape3[1][19] = d - (most_half_midy + quar_half_midy);

  shape3[0][20] = midx - quar_half_midx;
  shape3[1][20] = d - quar_half_midy;

  shape3[0][21] = midx;
  shape3[1][21] = d;

  shape3[0][22] = midx + quar_half_midx;
  shape3[1][22] = d -  quar_half_midy;

  shape3[0][23] = midx + most_half_midx;
  shape3[1][23] = d - (quar_half_midy + most_half_midy);

  shape3[0][24] = midx + quar_half_midx;
  shape3[1][24] = half_midy+midy;

  shape3[0][25] = midx- quar_half_midx;
  shape3[1][25] = half_midy;

  shape3[0][26] = midx - most_half_midx;
  shape3[1][26] = most_half_midy +  quar_half_midy;

  shape3[0][27] = midx - quar_half_midx;
 shape3[1][27] = quar_half_midy;
  p=1;
 
 
 if(z3<2) {
     arr[length_of_arr++] = 3;
 count3=28;
 range=0; 
 h=0;  
 flag=1;
 if (selection == 0)
     shape3_draw(shape3);
 else if (selection == 1)
     shape3_drawM(shape3);
  }

 else
  {
  flag=1;
   
  h=0;
  range=1;
  if (selection == 0)
      shape3_draw(shape3);
  else if (selection == 1)
      shape3_drawM(shape3);
   count3+=28;
        } 
 
  }

//end of shape 3 points calculation function 


//start of shape 4 points calculation function 
     
  function shape4_points(a,b,c,d)
  {
  z4++;
  sclr4 = '#'+cv1;
  check4 =1;
  midx = (a + c)/2;
  midy = (b + d)/2;

  half_midx = (a + midx)/2;
  half_midy = (b + midy)/2;

  quar_half_midx = (a + half_midx)/2;
  quar_half_midy = (b + half_midy)/2;

  most_half_midx = (a + quar_half_midx)/2;
  most_half_midy = (b + quar_half_midy)/2;
  
  shape4[0][0] = a;        
  shape4[1][0] = midy - quar_half_midy;
  

  shape4[0][1] = half_midx;
  shape4[1][1]= midy + quar_half_midy;

  shape4[0][2] = midx - quar_half_midx;
  shape4[1][2] = midy ;

  shape4[0][3] = midx - quar_half_midx;
  shape4[1][3] = midy - quar_half_midy;


  shape4[0][4] = midx+ quar_half_midx ;
  shape4[1][4] = midy - quar_half_midy;

  shape4[0][5] = midx + quar_half_midx;
  shape4[1][5] = midy ;
  

  shape4[0][6] = midx + half_midx;
  shape4[1][6] = midy +quar_half_midy;

  
  shape4[0][7] = c;
  shape4[1][7] = midy- quar_half_midy;

  shape4[0][8]=  c ;
  shape4[1][8] = midy + quar_half_midy;

  shape4[0][9] = midx + half_midx;
  shape4[1][9] = midy -quar_half_midy;



  shape4[0][10] = midx + quar_half_midx;
  shape4[1][10] = midy;

  shape4[0][11] = midx + quar_half_midx;
  shape4[1][11] = midy + quar_half_midy;

 shape4[0][12] = midx - quar_half_midx;
 shape4[1][12] = midy + quar_half_midy;

 shape4[0][13] = midx - quar_half_midx;
shape4[1][13] = midy ;




  shape4[0][14] =  half_midx;
  shape4[1][14] = midy - quar_half_midy;
  
  shape4[0][15] = a;
  shape4[1][15] = midy + quar_half_midy;

  



  shape4[0][16] = midx + quar_half_midx;
  shape4[1][16] = b;

  shape4[0][17] = midx - quar_half_midx;
  shape4[1][17] = half_midy;

  shape4[0][18] = midx ;
  shape4[1][18] = midy - quar_half_midy;

  shape4[0][19] = midx+quar_half_midx;
  shape4[1][19] =  midy - quar_half_midy;

  shape4[0][20] = midx + quar_half_midx;
  shape4[1][20] =  midy + quar_half_midy;

  shape4[0][21] = midx;
  shape4[1][21] = midy + quar_half_midy;

  shape4[0][22] = midx - quar_half_midx;
  shape4[1][22] = midy + half_midy;

  shape4[0][23] = midx + quar_half_midx;
  shape4[1][23] = d;

  shape4[0][24] = midx - quar_half_midx;
  shape4[1][24] = d;

  shape4[0][25] = midx + quar_half_midx;
  shape4[1][25] =  midy +half_midy;

  shape4[0][26] = midx ;
  shape4[1][26] = midy +  quar_half_midy;

  shape4[0][27] = midx - quar_half_midx;
 shape4[1][27] =  midy + quar_half_midy;
 
  shape4[0][28] = midx - quar_half_midx;
  shape4[1][28] = midy - quar_half_midy;

  shape4[0][29] = midx ;
  shape4[1][29] = midy - quar_half_midy;

  shape4[0][30] = midx + quar_half_midx;
  shape4[1][30] =  half_midy;

  shape4[0][31] = midx- quar_half_midx;
  shape4[1][31] = b;
   p=1;
  
 
 if(z4<2) {
     arr[length_of_arr++] = 4;
 count4=32;
 range=0; 
 h=0;  
 flag=1;
 if (selection == 0)
     shape4_draw(shape4);
 else if (selection == 1)
     shape4_drawM(shape4);
  }

 else
  {
  flag=1;
   
  h=0;
  range=1;
  if (selection == 0)
      shape4_draw(shape4);
  else if (selection == 1)
      shape4_drawM(shape4); 
   count4+=32;
        }

  
  }

//end of shape 4 points calculation function 



//start of shape 5 points calculation function 
    function shape5_points(a,b,c,d)
  {
  sclr5 = '#'+cv1;
  check5 =1;
  z5++;
   midx = (a + c)/2;
   midy = (b + d)/2;

  half_midx = (a + midx)/2;
  half_midy = (b + midy)/2;

  quar_half_midx = (a + half_midx)/2;
  quar_half_midy = (b + half_midy)/2;

  most_half_midx = (a + quar_half_midx)/2;
  most_half_midy = (b + quar_half_midy)/2;
  
  shape5[0][0] = a;        
  shape5[1][0] = midy;
  

  shape5[0][1] = quar_half_midx;
  shape5[1][1]= midy - quar_half_midy;

  shape5[0][2] = midx - quar_half_midx;
  shape5[1][2] = midy - quar_half_midy ;

  shape5[0][3] = midx - quar_half_midx;
  shape5[1][3] = quar_half_midy;


  shape5[0][4] = midx ;
  shape5[1][4] = b;

  shape5[0][5] = midx + quar_half_midx;
  shape5[1][5] = quar_half_midy ;
 
  shape5[0][6] = midx + quar_half_midx;
  shape5[1][6] = midy -quar_half_midy;
  
  shape5[0][7] = c - quar_half_midy;
  shape5[1][7] = midy- quar_half_midy;

  shape5[0][8]=  c ;
  shape5[1][8] = midy;

  shape5[0][9] = c - quar_half_midx;
  shape5[1][9] = midy + quar_half_midy;

  shape5[0][10] = midx + quar_half_midx;
  shape5[1][10] = midy+ quar_half_midy;

  shape5[0][11] = midx + quar_half_midx;
  shape5[1][11] = d - quar_half_midy;

  shape5[0][12] = midx ;
  shape5[1][12] = d;

  shape5[0][13] = midx - quar_half_midx;
  shape5[1][13] =  d - quar_half_midy ;

  shape5[0][14] =  midx - quar_half_midx;
  shape5[1][14] = midy + quar_half_midy;
  
  shape5[0][15] = quar_half_midx
  shape5[1][15] = midy + quar_half_midy;
   p=1;
  
  if(z5<2) {
    arr[length_of_arr++] = 5;
    count5=32;
    range=0; 
    h=0;  
    flag=1;
   if (selection == 0)
     shape5_draw(shape5);
   else if (selection == 1) {
     shape5_drawM(shape5);
     }
  }

 else
  {
  flag=1;
   
  h=0;
  range=1;
  if (selection == 0)
      shape5_draw(shape5);
  else if (selection == 1)      
      shape5_drawM(shape5);
  
   count5+=32;
        }  
 
  }
 
//end of shape 5 points calculation function 



//start of shape 6 points calculation function 
   function shape6_points(a,b,c,d)
  {
 
  sclr6 = '#'+cv1;
  check6 =1;
  z6++;
 
  midx = (a + c)/2;
  midy = (b + d)/2;

  half_midx = (a + midx)/2;
  half_midy = (b + midy)/2;

  quar_half_midx = (a + half_midx)/2;
  quar_half_midy = (b + half_midy)/2;

  most_half_midx = (a + quar_half_midx)/2;
  most_half_midy = (b + quar_half_midy)/2;
  
  shape6[0][0] = a;        
  shape6[1][0] = midy - quar_half_midy;
  
  shape6[0][1] = quar_half_midx;
  shape6[1][1]=  half_midy;

  shape6[0][2] = half_midx;
  shape6[1][2] = midy  - quar_half_midy;

  shape6[0][3] = half_midx + most_half_midx;
  shape6[1][3] = midy - quar_half_midy;

  shape6[0][4] = midx - most_half_midx ;
  shape6[1][4] = midy ;

  shape6[0][5] = midx - most_half_midx;
  shape6[1][5] = midy + most_half_midy;

  shape6[0][6] = midx + most_half_midx;
  shape6[1][6] = midy + most_half_midy;
 
  shape6[0][7] = midx + most_half_midx;
  shape6[1][7] = midy;

  shape6[0][8]=  c -( half_midx + most_half_midx);
  shape6[1][8] = midy - quar_half_midy;

  shape6[0][9] = c -  half_midx;
  shape6[1][9] = midy - quar_half_midy;

  shape6[0][10] = c -  quar_half_midx;
  shape6[1][10] = half_midy;

  shape6[0][11] = c;
  shape6[1][11] = midy - quar_half_midy;

  shape6[0][12] = c;
  shape6[1][12] = midy + quar_half_midy;

  shape6[0][13] = c- quar_half_midx;
  shape6[1][13] = midy + half_midy;

  shape6[0][14] =  c - half_midx;
  shape6[1][14] = midy + quar_half_midy;
  
  shape6[0][15] = c - (half_midx + most_half_midx);
  shape6[1][15] = midy + quar_half_midy;

  shape6[0][16] = midx + most_half_midx;
  shape6[1][16] = midy;

  shape6[0][17] = midx + most_half_midx;
  shape6[1][17] = midy - most_half_midy;

  shape6[0][18] = midx  - most_half_midx;
  shape6[1][18] = midy - most_half_midy;

  shape6[0][19] = midx-most_half_midx;
  shape6[1][19] =  midy;

  shape6[0][20] = shape6[0][3];
  shape6[1][20] =  midy + quar_half_midy ;

  shape6[0][21] = shape6[0][2]
  shape6[1][21] = midy + quar_half_midy;

  shape6[0][22] = shape6[0][1];
  shape6[1][22] = midy + half_midy;

  shape6[0][23] = a;
  shape6[1][23] = midy + quar_half_midy;

  shape6[0][24] = midx + quar_half_midx;
  shape6[1][24] = b; 

  shape6[0][25] = midx + half_midx;
  shape6[1][25] =  quar_half_midy; 

  shape6[0][26] = midx + quar_half_midx ;
  shape6[1][26] = half_midy; 

  shape6[0][27] = midx + quar_half_midx;
  shape6[1][27] =  half_midy + most_half_midy; 
 
  shape6[0][28] = midx;
  shape6[1][28] = midy - most_half_midy; 

  shape6[0][29] = midx - most_half_midx ;
  shape6[1][29] = midy - most_half_midy;   

  shape6[0][30] = midx - most_half_midx;
  shape6[1][30] =  midy + most_half_midy; 

  shape6[0][31] = midx;
  shape6[1][31] = midy + most_half_midy;  

  shape6[0][32] =  midx - quar_half_midx;        
  shape6[1][32] = d- (half_midy+ most_half_midy);  
  

  shape6[0][33] = midx - quar_half_midx;
  shape6[1][33]=  midy + half_midy; 

  shape6[0][34] = half_midx;
  shape6[1][34] = d - quar_half_midy;  

  shape6[0][35] = midx - quar_half_midx;
  shape6[1][35] = d;  

  shape6[0][36] = midx + quar_half_midx ;
  shape6[1][36] = d;   

  shape6[0][37] = midx + half_midx;
  shape6[1][37] = d - quar_half_midy;  

  shape6[0][38] = midx + quar_half_midx;
  shape6[1][38] = d - half_midy; 
  
  shape6[0][39] = midx + quar_half_midx;
  shape6[1][39] = d - (half_midy + most_half_midy);

  shape6[0][40]=  midx;
  shape6[1][40] = midy + most_half_midy;  

  shape6[0][41] = midx + most_half_midx;
  shape6[1][41] = midy + most_half_midy;

  shape6[0][42] = midx +  most_half_midx;
  shape6[1][42] = midy - most_half_midy;  

  shape6[0][43] = midx;
  shape6[1][43] = midy - most_half_midy; 

  shape6[0][44] =  midx - quar_half_midx;
  shape6[1][44] = shape6[1][27];  

  shape6[0][45] =  midx - quar_half_midx;
  shape6[1][45] = shape6[1][26];

  shape6[0][46] =  midx - half_midx;
  shape6[1][46] = shape6[1][25]; 
  
  shape6[0][47] = midx - quar_half_midx;
  shape6[1][47] = b;
  p=1;

   
  if(z6<2) {
      arr[length_of_arr++] = 6;
      count6=48;
      range=0; 
      h=0;  
      flag=1;
      if (selection == 0)
      shape6_draw(shape6);
  else if (selection == 1)
      shape6_drawM(shape6);
                  }

 else
  {
  flag=1;
  h=0;
  range=1;
   if (selection == 0)
     shape6_draw(shape6);
 else if (selection == 1)
     shape6_drawM(shape6); 
   count6+=48;
        }
 
 
  }

//end of shape 6 points calculation function 



//start of shape 7 points calculation function 
       function shape7_points(a,b,c,d)
  {
   sclr7 = '#'+cv1;
  check7 =1;
   z7++;
   midx = (a + c)/2;
   midy = (b + d)/2;

  half_midx = (a + midx)/2;
  half_midy = (b + midy)/2;

  quar_half_midx = (a + half_midx)/2;
  quar_half_midy = (b + half_midy)/2;

  most_half_midx = (a + quar_half_midx)/2;
  most_half_midy = (b + quar_half_midy)/2;
  
  shape7[0][0] = a;        
  shape7[1][0] = midy - quar_half_midy;//
 
  shape7[0][1] = quar_half_midx;
  shape7[1][1]=  half_midy; //

  shape7[0][2] = half_midx;
  shape7[1][2] = half_midy;  //

  shape7[0][3] = midx - quar_half_midx;
  shape7[1][3] =  midy;  //

  shape7[0][4] = midx - quar_half_midx;
  shape7[1][4] = midy + quar_half_midy;  //

  shape7[0][5] = midx + quar_half_midx;
  shape7[1][5] = midy + quar_half_midy;     //

  shape7[0][6] = midx + quar_half_midx;
  shape7[1][6] = midy;     //
  
  shape7[0][7] = midx + half_midx;
  shape7[1][7] = midy - half_midy;  //

  shape7[0][8]=  c - quar_half_midx;
  shape7[1][8] = midy - half_midy;  //

  shape7[0][9] = c ;
  shape7[1][9] = midy - quar_half_midy;  //

  shape7[0][10] = c ;
  shape7[1][10] = midy + quar_half_midy; //

  shape7[0][11] = c - quar_half_midx;
  shape7[1][11] = midy + half_midy; //

  shape7[0][12] = c - half_midx;
  shape7[1][12] = midy + half_midy;//

  shape7[0][13] = midx + quar_half_midx;
  shape7[1][13] = midy;  //

  shape7[0][14] =  midx + quar_half_midx;
  shape7[1][14] = midy - quar_half_midy; //
  
  shape7[0][15] = midx - quar_half_midx;
  shape7[1][15] = midy - quar_half_midy;  //

  shape7[0][16] = midx - quar_half_midx;
  shape7[1][16] = midy;   //

  shape7[0][17] = midx - half_midx;
  shape7[1][17] = midy +half_midy;  //

  shape7[0][18] = quar_half_midx;
  shape7[1][18] = midy + half_midy; //

  shape7[0][19] = a;
  shape7[1][19] =  midy + quar_half_midy;  //

  shape7[0][20] = midx + quar_half_midx;
  shape7[1][20] =  b;

  shape7[0][21] = midx  + half_midx;
  shape7[1][21] = quar_half_midy; //

  shape7[0][22] = midx + half_midx;
  shape7[1][22] = half_midy;//

  shape7[0][23] = midx ;
  shape7[1][23] = midy - quar_half_midy;//

  shape7[0][24] = midx - quar_half_midx;
  shape7[1][24] = midy - quar_half_midy; // 

  shape7[0][25] = midx - quar_half_midx;
  shape7[1][25] = midy + quar_half_midy; // 

  shape7[0][26] = midx ;
  shape7[1][26] = midy + quar_half_midy; // 

  shape7[0][27] = midx + half_midx;
  shape7[1][27] =  midy + half_midy; //
 
  shape7[0][28] = midx + half_midx;
  shape7[1][28] = d - quar_half_midy;  //

  shape7[0][29] = midx + quar_half_midx ;
  shape7[1][29] = d;   //

  shape7[0][30] = midx - quar_half_midx;
  shape7[1][30] =  d; //

  shape7[0][31] = half_midx;
  shape7[1][31] = d - quar_half_midy; //  

  shape7[0][32] =  half_midx ;        
  shape7[1][32] = midy +half_midy;  // 
  
  shape7[0][33] = midx ;
  shape7[1][33]=  midy + quar_half_midy; //

  shape7[0][34] =  midx + quar_half_midx;
  shape7[1][34] = midy + quar_half_midy;//  

  shape7[0][35] = midx + quar_half_midx;
  shape7[1][35] = midy - quar_half_midy; // 

  shape7[0][36] = midx;
  shape7[1][36] = midy - quar_half_midy; //  

  shape7[0][37] =  half_midx;
  shape7[1][37] =  half_midy; // 
 
  shape7[0][38] = half_midx;
  shape7[1][38] = quar_half_midy; //
  
  shape7[0][39] = midx - quar_half_midx;
  shape7[1][39] = b;
   p=1;

   if(z7<2) {
     arr[length_of_arr++] = 7;
   count7=40
   range=0; 
   h=0;  
   flag=1;
   if (selection == 0)
     shape7_draw(shape7);
   else if (selection == 1)
     shape7_drawM(shape7);
  }

 else
  {
  flag=1;
   
  h=0;
  range=1;
   if (selection == 0)
     shape7_draw(shape7);
 else if (selection == 1)
     shape7_drawM(shape7);
   count7+=40;
        }
  
  
  }


//end of shape 7 points calculation function 



//start of shape 8 points calculation function 
     function shape8_points(a,b,c,d)
  {
  sclr8 = '#'+cv1;
  check8 =1;
  z8++;
  midx = (a + c)/2;
  midy = (b + d)/2;

  half_midx = (a + midx)/2;
  half_midy = (b + midy)/2;

  quar_half_midx = (a + half_midx)/2;
  quar_half_midy = (b + half_midy)/2;

  most_half_midx = (a + quar_half_midx)/2;
  most_half_midy = (b + quar_half_midy)/2;
  
  shape8[0][0] = midx;        
  shape8[1][0] = b;//
  
  shape8[0][1] = c;
  shape8[1][1]= d; //

  shape8[0][2] = a;
  shape8[1][2] = d;  //

  shape8[0][3] = a;
  shape8[1][3] =  d;  //

  shape8[0][4] = a;
  shape8[1][4] = d;   //

  shape8[0][5] = a;
  shape8[1][5] = d;     //

  shape8[0][6] = a;
  shape8[1][6] = d;     //
  
  shape8[0][7] = a;
  shape8[1][7] = d;  //

  shape8[0][8] = a;
  shape8[1][8] = d;  //

  shape8[0][9] = a ;
  shape8[1][9] = d;  //

  shape8[0][10] = a ;
  shape8[1][10] = d; //

  shape8[0][11] = a;
  shape8[1][11] = d; //

  shape8[0][12] = a;
  shape8[1][12] = d ;//

  shape8[0][13] =  a;
  shape8[1][13] = d ;  //

  shape8[0][14] =  a;
  shape8[1][14] = d; //
  
  shape8[0][15] = a;
  shape8[1][15] = d;  //

  shape8[0][16] = a;
  shape8[1][16] = d ;   //

  shape8[0][17] = a;
  shape8[1][17] = d ;  //

  shape8[0][18] = a;
  shape8[1][18] = d; //

  shape8[0][19] = a;
  shape8[1][19] =   d;  //
  p=1;

  if(z8<2) {
      arr[length_of_arr++] = 8;
 count8=40
 range=0; 
 h=0;  
 flag=1;
 if (selection == 0)
     shape8_draw(shape8);
 else if (selection == 1)
     shape8_drawM(shape8);
  }

 else
  {
  flag=1;
   
  h=0;
  range=1;
   if (selection == 0)
     shape8_draw(shape8);
 else if (selection == 1)
     shape8_drawM(shape8);
   count8+=40;
        }


  
  }
//end of shape 8 points calculation function 



//start of shape 9 points calculation function 
      function shape9_points(a,b,c,d)
  {
   sclr9 = '#'+cv1;
  check9=1;
  z9++;
   midx = (a + c)/2;
   midy = (b + d)/2;

  half_midx = (a + midx)/2;
  half_midy = (b + midy)/2;

  quar_half_midx = (a + half_midx)/2;
  quar_half_midy = (b + half_midy)/2;

  most_half_midx = (a + quar_half_midx)/2;
  most_half_midy = (b + quar_half_midy)/2;
  
  shape9[0][0] = a;        
  shape9[1][0] = b;
  
  shape9[0][1] = quar_half_midx;
  shape9[1][1]=  b;

  shape9[0][2] = midx;
  shape9[1][2] = midy;

  shape9[0][3] = c;
  shape9[1][3] = d - quar_half_midy;

  shape9[0][4] = c;
  shape9[1][4] = d;

  shape9[0][5] = c - quar_half_midx ;
  shape9[1][5] = d ;

  shape9[0][6] = midx;
  shape9[1][6] = midy;

  shape9[0][7] = c - quar_half_midx;
  shape9[1][7] = b;
  
  shape9[0][8] = c;
  shape9[1][8] = b;

  shape9[0][9]=  c;
  shape9[1][9] = quar_half_midy;

  shape9[0][10] = midx;
  shape9[1][10] = midy;

  shape9[0][11] = a;
  shape9[1][11] = d - quar_half_midy;

  shape9[0][12] = a;
  shape9[1][12] = d;

  shape9[0][13] = quar_half_midx;
  shape9[1][13] = d;

  shape9[0][14] = midx;
  shape9[1][14] = midy;

  shape9[0][15] =  a;
  shape9[1][15] = quar_half_midy;
 
  shape9[0][16] = midx ;
  shape9[1][16] = b;

  shape9[0][17] = midx + quar_half_midx;
  shape9[1][17] = quar_half_midy;

  shape9[0][18] = midx ;
  shape9[1][18] = midy ;

  shape9[0][19] = midx+quar_half_midx;
  shape9[1][19] =  d - quar_half_midy;

  shape9[0][20] = midx;
  shape9[1][20] =  d ;

  shape9[0][21] = midx - quar_half_midx;
  shape9[1][21] = d - quar_half_midy;

  shape9[0][22] = midx;
  shape9[1][22] = midy;

  shape9[0][23] = c - quar_half_midx;
  shape9[1][23] = midy - quar_half_midy;

  shape9[0][24] = c;
  shape9[1][24] = midy; 

  shape9[0][25] = c - quar_half_midx;
  shape9[1][25] =  midy + quar_half_midy; 

  shape9[0][26] = midx ;
  shape9[1][26] = midy; 

  shape9[0][27] = quar_half_midx;
  shape9[1][27] =  midy + quar_half_midy; 
 
  shape9[0][28] = a;
  shape9[1][28] = midy; 

  shape9[0][29] = quar_half_midx ;
  shape9[1][29] = midy - quar_half_midy;   

  shape9[0][30] = midx;
  shape9[1][30] =  midy; 

  shape9[0][31] = midx - quar_half_midx;
  shape9[1][31] = quar_half_midy;  
  p=1;
  if(z9<2) {
      arr[length_of_arr++] = 9;
 count9=32;
 range=0; 
 h=0;  
 flag=1;
 if (selection == 0)
     shape9_draw(shape9);
 else if (selection == 1)
     shape9_drawM(shape9);
  }

 else
  {
  flag=1;
   
  h=0;
  range=1;
   if (selection == 0)
     shape9_draw(shape9);
 else if (selection == 1)
     shape9_drawM(shape9);
   count9+=32;
        }
   
   }


//end of shape 9 points calculation function 




//start of shape 10 points calculation function 
       function shape10_points(a,b,c,d)
  {
  sclr10 = '#'+cv1;
  check10=1;
  z10++;
   midx = (a + c)/2;
   midy = (b + d)/2;

  half_midx = (a + midx)/2;
  half_midy = (b + midy)/2;

  quar_half_midx = (a + half_midx)/2;
  quar_half_midy = (b + half_midy)/2;

  most_half_midx = (a + quar_half_midx)/2;
  most_half_midy = (b + quar_half_midy)/2;
  
  shape10[0][0] = a;        
  shape10[1][0] = midy;
  
  shape10[0][1] = quar_half_midx;
  shape10[1][1]=  midy - most_half_midy;

  shape10[0][2] = midx - quar_half_midx;
  shape10[1][2] = midy - most_half_midy;

  shape10[0][3] = midx;
  shape10[1][3] = midy+most_half_midy;

  shape10[0][4] = midx + quar_half_midx;
  shape10[1][4] = midy - most_half_midy;

  shape10[0][5] = c - quar_half_midx ;
  shape10[1][5] = midy - most_half_midy ;

  shape10[0][6] = c;
  shape10[1][6] = midy;

  shape10[0][7] = c - quar_half_midx;
  shape10[1][7] = midy + most_half_midy;
  
  shape10[0][8] = midx + quar_half_midx;
  shape10[1][8] = midy + most_half_midy;

  shape10[0][9]=  midx;
  shape10[1][9] = midy - most_half_midy;

  shape10[0][10] = midx - quar_half_midx;
  shape10[1][10] = midy + most_half_midy;

  shape10[0][11] = quar_half_midx;
  shape10[1][11] = midy + most_half_midy;

  shape10[0][12] = midx;
  shape10[1][12] = b;

 shape10[0][13] = midx + most_half_midx;
 shape10[1][13] = quar_half_midy;

 shape10[0][14] =  midx + most_half_midx;
 shape10[1][14] = midy - quar_half_midy;

  shape10[0][15] =  midx - most_half_midx;
  shape10[1][15] = midy;
  
  shape10[0][16] = midx + most_half_midx;
  shape10[1][16] = midy + quar_half_midy;

  shape10[0][17] = midx + most_half_midx;
  shape10[1][17] = d - quar_half_midy;

  shape10[0][18] = midx ;
  shape10[1][18] = d ;

  shape10[0][19] = midx - most_half_midx;
  shape10[1][19] =  d - quar_half_midy;

  shape10[0][20] = midx - most_half_midx;
  shape10[1][20] =  midy + quar_half_midy;

  shape10[0][21] = midx + most_half_midx;
  shape10[1][21] = midy;

  shape10[0][22] = midx - most_half_midx;
  shape10[1][22] = midy - quar_half_midy;

  shape10[0][23] = midx - most_half_midx;
  shape10[1][23] = quar_half_midy;
  p=1;

  if(z10<2) {
      arr[length_of_arr++] = 10;
 count10=24;
 range=0; 
 h=0;  
 flag=1;
 if (selection == 0)
     shape10_draw(shape10);
 else if (selection == 1)
     shape10_drawM(shape10);
  }

 else
  {
  flag=1;
   
  h=0;
  range=1;
  if (selection == 0)
     shape10_draw(shape10);
 else if (selection == 1)
     shape10_drawM(shape10);
   count10+=24;
        }

  
   }


//end of shape 10 points calculation function 



function draw_patterns() {

 selection = 0;
 if(step ==1)
	  shape1_points(0,0,500,500);
	  
	  else if(step == 2 )
	   shape2_points(0,0,500,500);
	   
	   
	   else if(step == 3 )
	    shape3_points(0,0,500,500);
		
		
		else if(step == 4)
		shape4_points(0,0,500,500);
		
		
		else if(step==5 )
		shape5_points(0,0,500,500);
		
		else if(step == 6 )
		 shape6_points(0,0,500,500);
		 
		 else if(step == 7)
		  shape7_points(0,0,500,500);
		  
		  else if(step==8  )
		  shape8_points(0,0,500,500);
		  
		  else if(step==9 )
		  shape9_points(0,0,500,500);
		  
		  else if(step==10 )
		  shape10_points(0,0,500,500);
		  	 
	 
	 
	 }


function draw_patternsM()
  {      
 selection =1;
 if (step == 1)
     shape1_points(0, 0, 500, 500);

 else if (step == 2)
     shape2_points(0, 0, 500, 500);


 else if (step == 3)
     shape3_points(0, 0, 500, 500);


 else if (step== 4)
     shape4_points(0, 0, 500, 500);


 else if (step == 5) 
     shape5_points(0, 0, 500, 500);
 

 else if (step == 6)
     shape6_points(0, 0, 500, 500);

 else if (step == 7)
     shape7_points(0, 0, 500, 500);

 else if (step == 8)
     shape8_points(0, 0, 500, 500);

 else if (step == 9)
     shape9_points(0, 0, 500, 500);

 else if (step == 10)
     shape10_points(0, 0, 500, 500);
		
	 }
  //


   //function to generate automatic designs


	 function draw_patternsA() {
	  
	     selection = 1;
	     for (var u = 0; u < 1; u++) {
	         auto = 1;
	         r = Math.floor(Math.random() * 255) + 1;   // code for random number generation from 0 to 255
	         g = Math.floor(Math.random() * 255) + 1;
	         b = Math.floor(Math.random() * 255) + 1;
	         if (step2 == 1) {
	             shape1_points(0, 0, 500, 500);
	             if (listvalue == 2)
	                 split_into_fourM();

	             else if (listvalue == 3)
	                 split_into_right_diagonal();

	             else if (listvalue == 4)
	                 split_into_left_diagonal();


	             else if (listvalue == 5)
	                 split_along_yaxis();


	             else if (listvalue == 6)
	                 split_along_xaxis();


	             else if (listvalue == 10)
	                 split_into_fourA();


	             else if (listvalue == 7)
	                 split_into_fourB();

	             else if (listvalue == 8)
	                 split_into_fourC();

	             else if (listvalue == 9)
	                 split_into_fourD();



	             else if (listvalue == 12)
	                 split_into_threeA();


	             else if (listvalue == 11)
	                 split_into_threeB();

	             else if (listvalue == 14)
	                 split_into_threeC();

	             else if (listvalue == 13)
	                 split_into_threeD();

	             else if (listvalue == 17)
	                 split_into_border_flower8();


	             else if (listvalue == 18)
	                 split_into_border_flower10();


	             else if (listvalue == 19)
	                 split_into_border_flower12();


	             else if (listvalue == 16)
	                 split_into_border_flower10_with_centre();

	             else if (listvalue == 20)
	                 split_into_border_flower112();

	             else if (listvalue == 21)
	                 split_into_border_flower111();

	             else if (listvalue == 15)
	                 split_into_border_flower10_with_centreA();


	             else if (listvalue == 22) {
	                 auto_list = Math.floor(Math.random() * 21) + 1;


	                 if (auto_list == 2)
	                     split_into_fourM();

	                 else if (auto_list == 3)
	                     split_into_right_diagonal();

	                 else if (auto_list == 4)
	                     split_into_left_diagonal();


	                 else if (auto_list == 5)
	                     split_along_yaxis();


	                 else if (auto_list == 6)
	                     split_along_xaxis();


	                 else if (auto_list == 10)
	                     split_into_fourA();


	                 else if (auto_list == 7)
	                     split_into_fourB();

	                 else if (auto_list == 8)
	                     split_into_fourC();

	                 else if (auto_list == 9)
	                     split_into_fourD();



	                 else if (auto_list == 12)
	                     split_into_threeA();


	                 else if (auto_list == 11)
	                     split_into_threeB();

	                 else if (auto_list == 14)
	                     split_into_threeC();

	                 else if (auto_list == 13)
	                     split_into_threeD();

	                 else if (auto_list == 17)
	                     split_into_border_flower8();


	                 else if (auto_list == 18)
	                     split_into_border_flower10();


	                 else if (auto_list == 19)
	                     split_into_border_flower12();


	                 else if (auto_list == 16)
	                     split_into_border_flower10_with_centre();

	                 else if (auto_list == 20)
	                     split_into_border_flower112();

	                 else if (auto_list == 21)
	                     split_into_border_flower111();

	                 else if (auto_list == 15)
	                     split_into_border_flower10_with_centreA();





                 
                 
                 }




	         }

	         else if (step2 == 2) {
	             shape2_points(0, 0, 500, 500);
	             if (listvalue == 2)
	                 split_into_fourM();

	             else if (listvalue == 3)
	                 split_into_right_diagonal();

	             else if (listvalue == 4)
	                 split_into_left_diagonal();


	             else if (listvalue == 5)
	                 split_along_yaxis();


	             else if (listvalue == 6)
	                 split_along_xaxis();


	             else if (listvalue == 10)
	                 split_into_fourA();


	             else if (listvalue == 7)
	                 split_into_fourB();

	             else if (listvalue == 8)
	                 split_into_fourC();

	             else if (listvalue == 9)
	                 split_into_fourD();



	             else if (listvalue == 12)
	                 split_into_threeA();


	             else if (listvalue == 11)
	                 split_into_threeB();

	             else if (listvalue == 14)
	                 split_into_threeC();

	             else if (listvalue == 13)
	                 split_into_threeD();

	             else if (listvalue == 17)
	                 split_into_border_flower8();


	             else if (listvalue == 18)
	                 split_into_border_flower10();


	             else if (listvalue == 19)
	                 split_into_border_flower12();


	             else if (listvalue == 16)
	                 split_into_border_flower10_with_centre();

	             else if (listvalue == 20)
	                 split_into_border_flower112();

	             else if (listvalue == 21)
	                 split_into_border_flower111();

	             else if (listvalue == 15)
	                 split_into_border_flower10_with_centreA();

	             else if (listvalue == 22) {
	                 auto_list = Math.floor(Math.random() * 21) + 1;


	                 if (auto_list == 2)
	                     split_into_fourM();

	                 else if (auto_list == 3)
	                     split_into_right_diagonal();

	                 else if (auto_list == 4)
	                     split_into_left_diagonal();


	                 else if (auto_list == 5)
	                     split_along_yaxis();


	                 else if (auto_list == 6)
	                     split_along_xaxis();


	                 else if (auto_list == 10)
	                     split_into_fourA();


	                 else if (auto_list == 7)
	                     split_into_fourB();

	                 else if (auto_list == 8)
	                     split_into_fourC();

	                 else if (auto_list == 9)
	                     split_into_fourD();



	                 else if (auto_list == 12)
	                     split_into_threeA();


	                 else if (auto_list == 11)
	                     split_into_threeB();

	                 else if (auto_list == 14)
	                     split_into_threeC();

	                 else if (auto_list == 13)
	                     split_into_threeD();

	                 else if (auto_list == 17)
	                     split_into_border_flower8();


	                 else if (auto_list == 18)
	                     split_into_border_flower10();


	                 else if (auto_list == 19)
	                     split_into_border_flower12();


	                 else if (auto_list == 16)
	                     split_into_border_flower10_with_centre();

	                 else if (auto_list == 20)
	                     split_into_border_flower112();

	                 else if (auto_list == 21)
	                     split_into_border_flower111();

	                 else if (auto_list == 15)
	                     split_into_border_flower10_with_centreA();







	             }


	         }


	         else if (step2 == 3) {
	             shape3_points(0, 0, 500, 500);
	             if (listvalue == 2)
	                 split_into_fourM();

	             else if (listvalue == 3)
	                 split_into_right_diagonal();

	             else if (listvalue == 4)
	                 split_into_left_diagonal();


	             else if (listvalue == 5)
	                 split_along_yaxis();


	             else if (listvalue == 6)
	                 split_along_xaxis();


	             else if (listvalue == 10)
	                 split_into_fourA();


	             else if (listvalue == 7)
	                 split_into_fourB();

	             else if (listvalue == 8)
	                 split_into_fourC();

	             else if (listvalue == 9)
	                 split_into_fourD();



	             else if (listvalue == 12)
	                 split_into_threeA();


	             else if (listvalue == 11)
	                 split_into_threeB();

	             else if (listvalue == 14)
	                 split_into_threeC();

	             else if (listvalue == 13)
	                 split_into_threeD();

	             else if (listvalue == 17)
	                 split_into_border_flower8();


	             else if (listvalue == 18)
	                 split_into_border_flower10();


	             else if (listvalue == 19)
	                 split_into_border_flower12();


	             else if (listvalue == 16)
	                 split_into_border_flower10_with_centre();

	             else if (listvalue == 20)
	                 split_into_border_flower112();

	             else if (listvalue == 21)
	                 split_into_border_flower111();

	             else if (listvalue == 15)
	                 split_into_border_flower10_with_centreA();

	             else if (listvalue == 22) {
	                 auto_list = Math.floor(Math.random() * 21) + 1;


	                 if (auto_list == 2)
	                     split_into_fourM();

	                 else if (auto_list == 3)
	                     split_into_right_diagonal();

	                 else if (auto_list == 4)
	                     split_into_left_diagonal();


	                 else if (auto_list == 5)
	                     split_along_yaxis();


	                 else if (auto_list == 6)
	                     split_along_xaxis();


	                 else if (auto_list == 10)
	                     split_into_fourA();


	                 else if (auto_list == 7)
	                     split_into_fourB();

	                 else if (auto_list == 8)
	                     split_into_fourC();

	                 else if (auto_list == 9)
	                     split_into_fourD();



	                 else if (auto_list == 12)
	                     split_into_threeA();


	                 else if (auto_list == 11)
	                     split_into_threeB();

	                 else if (auto_list == 14)
	                     split_into_threeC();

	                 else if (auto_list == 13)
	                     split_into_threeD();

	                 else if (auto_list == 17)
	                     split_into_border_flower8();


	                 else if (auto_list == 18)
	                     split_into_border_flower10();


	                 else if (auto_list == 19)
	                     split_into_border_flower12();


	                 else if (auto_list == 16)
	                     split_into_border_flower10_with_centre();

	                 else if (auto_list == 20)
	                     split_into_border_flower112();

	                 else if (auto_list == 21)
	                     split_into_border_flower111();

	                 else if (auto_list == 15)
	                     split_into_border_flower10_with_centreA();







	             }



	         }


	         else if (step2 == 4) {
	             shape4_points(0, 0, 500, 500);
	             if (listvalue == 2)
	                 split_into_fourM();

	             else if (listvalue == 3)
	                 split_into_right_diagonal();

	             else if (listvalue == 4)
	                 split_into_left_diagonal();


	             else if (listvalue == 5)
	                 split_along_yaxis();


	             else if (listvalue == 6)
	                 split_along_xaxis();


	             else if (listvalue == 10)
	                 split_into_fourA();


	             else if (listvalue == 7)
	                 split_into_fourB();

	             else if (listvalue == 8)
	                 split_into_fourC();

	             else if (listvalue == 9)
	                 split_into_fourD();



	             else if (listvalue == 12)
	                 split_into_threeA();


	             else if (listvalue == 11)
	                 split_into_threeB();

	             else if (listvalue == 14)
	                 split_into_threeC();

	             else if (listvalue == 13)
	                 split_into_threeD();

	             else if (listvalue == 17)
	                 split_into_border_flower8();


	             else if (listvalue == 18)
	                 split_into_border_flower10();


	             else if (listvalue == 19)
	                 split_into_border_flower12();


	             else if (listvalue == 16)
	                 split_into_border_flower10_with_centre();

	             else if (listvalue == 20)
	                 split_into_border_flower112();

	             else if (listvalue == 21)
	                 split_into_border_flower111();

	             else if (listvalue == 15)
	                 split_into_border_flower10_with_centreA();

	             else if (listvalue == 22) {
	                 auto_list = Math.floor(Math.random() * 21) + 1;


	                 if (auto_list == 2)
	                     split_into_fourM();

	                 else if (auto_list == 3)
	                     split_into_right_diagonal();

	                 else if (auto_list == 4)
	                     split_into_left_diagonal();


	                 else if (auto_list == 5)
	                     split_along_yaxis();


	                 else if (auto_list == 6)
	                     split_along_xaxis();


	                 else if (auto_list == 10)
	                     split_into_fourA();


	                 else if (auto_list == 7)
	                     split_into_fourB();

	                 else if (auto_list == 8)
	                     split_into_fourC();

	                 else if (auto_list == 9)
	                     split_into_fourD();



	                 else if (auto_list == 12)
	                     split_into_threeA();


	                 else if (auto_list == 11)
	                     split_into_threeB();

	                 else if (auto_list == 14)
	                     split_into_threeC();

	                 else if (auto_list == 13)
	                     split_into_threeD();

	                 else if (auto_list == 17)
	                     split_into_border_flower8();


	                 else if (auto_list == 18)
	                     split_into_border_flower10();


	                 else if (auto_list == 19)
	                     split_into_border_flower12();


	                 else if (auto_list == 16)
	                     split_into_border_flower10_with_centre();

	                 else if (auto_list == 20)
	                     split_into_border_flower112();

	                 else if (auto_list == 21)
	                     split_into_border_flower111();

	                 else if (auto_list == 15)
	                     split_into_border_flower10_with_centreA();







	             }


	         }


	         else if (step2 == 5) {
	             shape5_points(0, 0, 500, 500);
	             if (listvalue == 2)
	                 split_into_fourM();

	             else if (listvalue == 3)
	                 split_into_right_diagonal();

	             else if (listvalue == 4)
	                 split_into_left_diagonal();


	             else if (listvalue == 5)
	                 split_along_yaxis();


	             else if (listvalue == 6)
	                 split_along_xaxis();


	             else if (listvalue == 10)
	                 split_into_fourA();


	             else if (listvalue == 7)
	                 split_into_fourB();

	             else if (listvalue == 8)
	                 split_into_fourC();

	             else if (listvalue == 9)
	                 split_into_fourD();



	             else if (listvalue == 12)
	                 split_into_threeA();


	             else if (listvalue == 11)
	                 split_into_threeB();

	             else if (listvalue == 14)
	                 split_into_threeC();

	             else if (listvalue == 13)
	                 split_into_threeD();

	             else if (listvalue == 17)
	                 split_into_border_flower8();


	             else if (listvalue == 18)
	                 split_into_border_flower10();


	             else if (listvalue == 19)
	                 split_into_border_flower12();


	             else if (listvalue == 16)
	                 split_into_border_flower10_with_centre();

	             else if (listvalue == 20)
	                 split_into_border_flower112();

	             else if (listvalue == 21)
	                 split_into_border_flower111();

	             else if (listvalue == 15)
	                 split_into_border_flower10_with_centreA();

	             else if (listvalue == 22) {
	                 auto_list = Math.floor(Math.random() * 21) + 1;


	                 if (auto_list == 2)
	                     split_into_fourM();

	                 else if (auto_list == 3)
	                     split_into_right_diagonal();

	                 else if (auto_list == 4)
	                     split_into_left_diagonal();


	                 else if (auto_list == 5)
	                     split_along_yaxis();


	                 else if (auto_list == 6)
	                     split_along_xaxis();


	                 else if (auto_list == 10)
	                     split_into_fourA();


	                 else if (auto_list == 7)
	                     split_into_fourB();

	                 else if (auto_list == 8)
	                     split_into_fourC();

	                 else if (auto_list == 9)
	                     split_into_fourD();



	                 else if (auto_list == 12)
	                     split_into_threeA();


	                 else if (auto_list == 11)
	                     split_into_threeB();

	                 else if (auto_list == 14)
	                     split_into_threeC();

	                 else if (auto_list == 13)
	                     split_into_threeD();

	                 else if (auto_list == 17)
	                     split_into_border_flower8();


	                 else if (auto_list == 18)
	                     split_into_border_flower10();


	                 else if (auto_list == 19)
	                     split_into_border_flower12();


	                 else if (auto_list == 16)
	                     split_into_border_flower10_with_centre();

	                 else if (auto_list == 20)
	                     split_into_border_flower112();

	                 else if (auto_list == 21)
	                     split_into_border_flower111();

	                 else if (auto_list == 15)
	                     split_into_border_flower10_with_centreA();







	             }



	         }


	         else if (step2 == 6) {
	             shape6_points(0, 0, 500, 500);
	             if (listvalue == 2)
	                 split_into_fourM();

	             else if (listvalue == 3)
	                 split_into_right_diagonal();

	             else if (listvalue == 4)
	                 split_into_left_diagonal();


	             else if (listvalue == 5)
	                 split_along_yaxis();


	             else if (listvalue == 6)
	                 split_along_xaxis();


	             else if (listvalue == 10)
	                 split_into_fourA();


	             else if (listvalue == 7)
	                 split_into_fourB();

	             else if (listvalue == 8)
	                 split_into_fourC();

	             else if (listvalue == 9)
	                 split_into_fourD();



	             else if (listvalue == 12)
	                 split_into_threeA();


	             else if (listvalue == 11)
	                 split_into_threeB();

	             else if (listvalue == 14)
	                 split_into_threeC();

	             else if (listvalue == 13)
	                 split_into_threeD();

	             else if (listvalue == 17)
	                 split_into_border_flower8();


	             else if (listvalue == 18)
	                 split_into_border_flower10();


	             else if (listvalue == 19)
	                 split_into_border_flower12();


	             else if (listvalue == 16)
	                 split_into_border_flower10_with_centre();

	             else if (listvalue == 20)
	                 split_into_border_flower112();

	             else if (listvalue == 21)
	                 split_into_border_flower111();

	             else if (listvalue == 15)
	                 split_into_border_flower10_with_centreA();

	             else if (listvalue == 22) {
	                 auto_list = Math.floor(Math.random() * 21) + 1;


	                 if (auto_list == 2)
	                     split_into_fourM();

	                 else if (auto_list == 3)
	                     split_into_right_diagonal();

	                 else if (auto_list == 4)
	                     split_into_left_diagonal();


	                 else if (auto_list == 5)
	                     split_along_yaxis();


	                 else if (auto_list == 6)
	                     split_along_xaxis();


	                 else if (auto_list == 10)
	                     split_into_fourA();


	                 else if (auto_list == 7)
	                     split_into_fourB();

	                 else if (auto_list == 8)
	                     split_into_fourC();

	                 else if (auto_list == 9)
	                     split_into_fourD();



	                 else if (auto_list == 12)
	                     split_into_threeA();


	                 else if (auto_list == 11)
	                     split_into_threeB();

	                 else if (auto_list == 14)
	                     split_into_threeC();

	                 else if (auto_list == 13)
	                     split_into_threeD();

	                 else if (auto_list == 17)
	                     split_into_border_flower8();


	                 else if (auto_list == 18)
	                     split_into_border_flower10();


	                 else if (auto_list == 19)
	                     split_into_border_flower12();


	                 else if (auto_list == 16)
	                     split_into_border_flower10_with_centre();

	                 else if (auto_list == 20)
	                     split_into_border_flower112();

	                 else if (auto_list == 21)
	                     split_into_border_flower111();

	                 else if (auto_list == 15)
	                     split_into_border_flower10_with_centreA();







	             }



	         }


	         else if (step2 == 7) {
	             shape7_points(0, 0, 500, 500); if (listvalue == 2)
	                 split_into_fourM();

	             else if (listvalue == 3)
	                 split_into_right_diagonal();

	             else if (listvalue == 4)
	                 split_into_left_diagonal();


	             else if (listvalue == 5)
	                 split_along_yaxis();


	             else if (listvalue == 6)
	                 split_along_xaxis();


	             else if (listvalue == 10)
	                 split_into_fourA();


	             else if (listvalue == 7)
	                 split_into_fourB();

	             else if (listvalue == 8)
	                 split_into_fourC();

	             else if (listvalue == 9)
	                 split_into_fourD();



	             else if (listvalue == 12)
	                 split_into_threeA();


	             else if (listvalue == 11)
	                 split_into_threeB();

	             else if (listvalue == 14)
	                 split_into_threeC();

	             else if (listvalue == 13)
	                 split_into_threeD();

	             else if (listvalue == 17)
	                 split_into_border_flower8();


	             else if (listvalue == 18)
	                 split_into_border_flower10();


	             else if (listvalue == 19)
	                 split_into_border_flower12();


	             else if (listvalue == 16)
	                 split_into_border_flower10_with_centre();

	             else if (listvalue == 20)
	                 split_into_border_flower112();

	             else if (listvalue == 21)
	                 split_into_border_flower111();

	             else if (listvalue == 15)
	                 split_into_border_flower10_with_centreA();

	             else if (listvalue == 22) {
	                 auto_list = Math.floor(Math.random() * 21) + 1;


	                 if (auto_list == 2)
	                     split_into_fourM();

	                 else if (auto_list == 3)
	                     split_into_right_diagonal();

	                 else if (auto_list == 4)
	                     split_into_left_diagonal();


	                 else if (auto_list == 5)
	                     split_along_yaxis();


	                 else if (auto_list == 6)
	                     split_along_xaxis();


	                 else if (auto_list == 10)
	                     split_into_fourA();


	                 else if (auto_list == 7)
	                     split_into_fourB();

	                 else if (auto_list == 8)
	                     split_into_fourC();

	                 else if (auto_list == 9)
	                     split_into_fourD();



	                 else if (auto_list == 12)
	                     split_into_threeA();


	                 else if (auto_list == 11)
	                     split_into_threeB();

	                 else if (auto_list == 14)
	                     split_into_threeC();

	                 else if (auto_list == 13)
	                     split_into_threeD();

	                 else if (auto_list == 17)
	                     split_into_border_flower8();


	                 else if (auto_list == 18)
	                     split_into_border_flower10();


	                 else if (auto_list == 19)
	                     split_into_border_flower12();


	                 else if (auto_list == 16)
	                     split_into_border_flower10_with_centre();

	                 else if (auto_list == 20)
	                     split_into_border_flower112();

	                 else if (auto_list == 21)
	                     split_into_border_flower111();

	                 else if (auto_list == 15)
	                     split_into_border_flower10_with_centreA();







	             }


	         }

	         else if (step2 == 8) {
	             shape8_points(0, 0, 500, 500); if (listvalue == 2)
	                 split_into_fourM();

	             else if (listvalue == 3)
	                 split_into_right_diagonal();

	             else if (listvalue == 4)
	                 split_into_left_diagonal();


	             else if (listvalue == 5)
	                 split_along_yaxis();


	             else if (listvalue == 6)
	                 split_along_xaxis();


	             else if (listvalue == 10)
	                 split_into_fourA();


	             else if (listvalue == 7)
	                 split_into_fourB();

	             else if (listvalue == 8)
	                 split_into_fourC();

	             else if (listvalue == 9)
	                 split_into_fourD();



	             else if (listvalue == 12)
	                 split_into_threeA();


	             else if (listvalue == 11)
	                 split_into_threeB();

	             else if (listvalue == 14)
	                 split_into_threeC();

	             else if (listvalue == 13)
	                 split_into_threeD();

	             else if (listvalue == 17)
	                 split_into_border_flower8();


	             else if (listvalue == 18)
	                 split_into_border_flower10();


	             else if (listvalue == 19)
	                 split_into_border_flower12();


	             else if (listvalue == 16)
	                 split_into_border_flower10_with_centre();

	             else if (listvalue == 20)
	                 split_into_border_flower112();

	             else if (listvalue == 21)
	                 split_into_border_flower111();

	             else if (listvalue == 15)
	                 split_into_border_flower10_with_centreA();


	             else if (listvalue == 22) {
	                 auto_list = Math.floor(Math.random() * 21) + 1;


	                 if (auto_list == 2)
	                     split_into_fourM();

	                 else if (auto_list == 3)
	                     split_into_right_diagonal();

	                 else if (auto_list == 4)
	                     split_into_left_diagonal();


	                 else if (auto_list == 5)
	                     split_along_yaxis();


	                 else if (auto_list == 6)
	                     split_along_xaxis();


	                 else if (auto_list == 10)
	                     split_into_fourA();


	                 else if (auto_list == 7)
	                     split_into_fourB();

	                 else if (auto_list == 8)
	                     split_into_fourC();

	                 else if (auto_list == 9)
	                     split_into_fourD();



	                 else if (auto_list == 12)
	                     split_into_threeA();


	                 else if (auto_list == 11)
	                     split_into_threeB();

	                 else if (auto_list == 14)
	                     split_into_threeC();

	                 else if (auto_list == 13)
	                     split_into_threeD();

	                 else if (auto_list == 17)
	                     split_into_border_flower8();


	                 else if (auto_list == 18)
	                     split_into_border_flower10();


	                 else if (auto_list == 19)
	                     split_into_border_flower12();


	                 else if (auto_list == 16)
	                     split_into_border_flower10_with_centre();

	                 else if (auto_list == 20)
	                     split_into_border_flower112();

	                 else if (auto_list == 21)
	                     split_into_border_flower111();

	                 else if (auto_list == 15)
	                     split_into_border_flower10_with_centreA();







	             }


	         }

	         else if (step2 == 9) {
	             shape9_points(0, 0, 500, 500); if (listvalue == 2)
	                 split_into_fourM();

	             else if (listvalue == 3)
	                 split_into_right_diagonal();

	             else if (listvalue == 4)
	                 split_into_left_diagonal();


	             else if (listvalue == 5)
	                 split_along_yaxis();


	             else if (listvalue == 6)
	                 split_along_xaxis();


	             else if (listvalue == 10)
	                 split_into_fourA();


	             else if (listvalue == 7)
	                 split_into_fourB();

	             else if (listvalue == 8)
	                 split_into_fourC();

	             else if (listvalue == 9)
	                 split_into_fourD();



	             else if (listvalue == 12)
	                 split_into_threeA();


	             else if (listvalue == 11)
	                 split_into_threeB();

	             else if (listvalue == 14)
	                 split_into_threeC();

	             else if (listvalue == 13)
	                 split_into_threeD();

	             else if (listvalue == 17)
	                 split_into_border_flower8();


	             else if (listvalue == 18)
	                 split_into_border_flower10();


	             else if (listvalue == 19)
	                 split_into_border_flower12();


	             else if (listvalue == 16)
	                 split_into_border_flower10_with_centre();

	             else if (listvalue == 20)
	                 split_into_border_flower112();

	             else if (listvalue == 21)
	                 split_into_border_flower111();

	             else if (listvalue == 15)
	                 split_into_border_flower10_with_centreA();


	             else if (listvalue == 22) {
	                 auto_list = Math.floor(Math.random() * 21) + 1;


	                 if (auto_list == 2)
	                     split_into_fourM();

	                 else if (auto_list == 3)
	                     split_into_right_diagonal();

	                 else if (auto_list == 4)
	                     split_into_left_diagonal();


	                 else if (auto_list == 5)
	                     split_along_yaxis();


	                 else if (auto_list == 6)
	                     split_along_xaxis();


	                 else if (auto_list == 10)
	                     split_into_fourA();


	                 else if (auto_list == 7)
	                     split_into_fourB();

	                 else if (auto_list == 8)
	                     split_into_fourC();

	                 else if (auto_list == 9)
	                     split_into_fourD();



	                 else if (auto_list == 12)
	                     split_into_threeA();


	                 else if (auto_list == 11)
	                     split_into_threeB();

	                 else if (auto_list == 14)
	                     split_into_threeC();

	                 else if (auto_list == 13)
	                     split_into_threeD();

	                 else if (auto_list == 17)
	                     split_into_border_flower8();


	                 else if (auto_list == 18)
	                     split_into_border_flower10();


	                 else if (auto_list == 19)
	                     split_into_border_flower12();


	                 else if (auto_list == 16)
	                     split_into_border_flower10_with_centre();

	                 else if (auto_list == 20)
	                     split_into_border_flower112();

	                 else if (auto_list == 21)
	                     split_into_border_flower111();

	                 else if (auto_list == 15)
	                     split_into_border_flower10_with_centreA();







	             }


	         }

	         else if (step2 == 10) {
	             shape10_points(0, 0, 500, 500); if (listvalue == 2)
	                 split_into_fourM();

	             else if (listvalue == 3)
	                 split_into_right_diagonal();

	             else if (listvalue == 4)
	                 split_into_left_diagonal();


	             else if (listvalue == 5)
	                 split_along_yaxis();


	             else if (listvalue == 6)
	                 split_along_xaxis();


	             else if (listvalue == 10)
	                 split_into_fourA();


	             else if (listvalue == 7)
	                 split_into_fourB();

	             else if (listvalue == 8)
	                 split_into_fourC();

	             else if (listvalue == 9)
	                 split_into_fourD();

                 else if(listvalue == 15)
                     split_into_border_flower10_with_centreA();

	             else if (listvalue == 12)
	                 split_into_threeA();


	             else if (listvalue == 11)
	                 split_into_threeB();

	             else if (listvalue == 14)
	                 split_into_threeC();

	             else if (listvalue == 13)
	                 split_into_threeD();

	             else if (listvalue == 17)
	                 split_into_border_flower8();


	             else if (listvalue == 18)
	                 split_into_border_flower10();


	             else if (listvalue == 19)
	                 split_into_border_flower12();


	             else if (listvalue == 16)
	                 split_into_border_flower10_with_centre();

	             else if (listvalue == 20)
	                 split_into_border_flower112();

	             else if (listvalue == 21)
	                 split_into_border_flower111();


	             else if (listvalue == 22) {
	                 auto_list = Math.floor(Math.random() * 21) + 1;


	                 if (auto_list == 2)
	                     split_into_fourM();

	                 else if (auto_list == 3)
	                     split_into_right_diagonal();

	                 else if (auto_list == 4)
	                     split_into_left_diagonal();


	                 else if (auto_list == 5)
	                     split_along_yaxis();


	                 else if (auto_list == 6)
	                     split_along_xaxis();


	                 else if (auto_list == 10)
	                     split_into_fourA();


	                 else if (auto_list == 7)
	                     split_into_fourB();

	                 else if (auto_list == 8)
	                     split_into_fourC();

	                 else if (auto_list == 9)
	                     split_into_fourD();



	                 else if (auto_list == 12)
	                     split_into_threeA();


	                 else if (auto_list == 11)
	                     split_into_threeB();

	                 else if (auto_list == 14)
	                     split_into_threeC();

	                 else if (auto_list == 13)
	                     split_into_threeD();

	                 else if (auto_list == 17)
	                     split_into_border_flower8();


	                 else if (auto_list == 18)
	                     split_into_border_flower10();


	                 else if (auto_list == 19)
	                     split_into_border_flower12();


	                 else if (auto_list == 16)
	                     split_into_border_flower10_with_centre();

	                 else if (auto_list == 20)
	                     split_into_border_flower112();

	                 else if (auto_list == 21)
	                     split_into_border_flower111();

	                 else if (auto_list == 15)
	                     split_into_border_flower10_with_centreA();







	             }


	         }


	         else if (step2 == 11) {
	             auto_rand = Math.floor(Math.random() * 10) + 1;
	             if (auto_rand == 1)
	                 shape1_points(0, 0, 500, 500);

	             else if (auto_rand == 2)
	                 shape2_points(0, 0, 500, 500);

	             else if (auto_rand == 3)
	                 shape3_points(0, 0, 500, 500);

	             else if (auto_rand == 4)
	                 shape4_points(0, 0, 500, 500);

	             else if (auto_rand == 5)
	                 shape5_points(0, 0, 500, 500);

	             else if (auto_rand == 6)
	                 shape6_points(0, 0, 500, 500);

	             else if (auto_rand == 7)
	                 shape7_points(0, 0, 500, 500);

	             else if (auto_rand == 8)
	                 shape2_points(0, 0, 500, 500);

	             else if (auto_rand == 9)
	                 shape9_points(0, 0, 500, 500);

	             else if (auto_rand == 10)
	                 shape10_points(0, 0, 500, 500);






	              if (listvalue == 2)
	                 split_into_fourM();

	             else if (listvalue == 3)
	                 split_into_right_diagonal();

	             else if (listvalue == 4)
	                 split_into_left_diagonal();


	             else if (listvalue == 5)
	                 split_along_yaxis();


	             else if (listvalue == 6)
	                 split_along_xaxis();


	             else if (listvalue == 10)
	                 split_into_fourA();


	             else if (listvalue == 7)
	                 split_into_fourB();

	             else if (listvalue == 8)
	                 split_into_fourC();

	             else if (listvalue == 9)
	                 split_into_fourD();

	             else if (listvalue == 15)
	                 split_into_border_flower10_with_centreA();

	             else if (listvalue == 12)
	                 split_into_threeA();


	             else if (listvalue == 11)
	                 split_into_threeB();

	             else if (listvalue == 14)
	                 split_into_threeC();

	             else if (listvalue == 13)
	                 split_into_threeD();

	             else if (listvalue == 17)
	                 split_into_border_flower8();


	             else if (listvalue == 18)
	                 split_into_border_flower10();


	             else if (listvalue == 19)
	                 split_into_border_flower12();


	             else if (listvalue == 16)
	                 split_into_border_flower10_with_centre();

	             else if (listvalue == 20)
	                 split_into_border_flower112();

	             else if (listvalue == 21)
	                 split_into_border_flower111();

	             else if (listvalue == 22) {
	                 auto_list = Math.floor(Math.random() * 21) + 1;


	                 if (auto_list == 2)
	                     split_into_fourM();

	                 else if (auto_list == 3)
	                     split_into_right_diagonal();

	                 else if (auto_list == 4)
	                     split_into_left_diagonal();


	                 else if (auto_list == 5)
	                     split_along_yaxis();


	                 else if (auto_list == 6)
	                     split_along_xaxis();


	                 else if (auto_list == 10)
	                     split_into_fourA();


	                 else if (auto_list == 7)
	                     split_into_fourB();

	                 else if (auto_list == 8)
	                     split_into_fourC();

	                 else if (auto_list == 9)
	                     split_into_fourD();



	                 else if (auto_list == 12)
	                     split_into_threeA();


	                 else if (auto_list == 11)
	                     split_into_threeB();

	                 else if (auto_list == 14)
	                     split_into_threeC();

	                 else if (auto_list == 13)
	                     split_into_threeD();

	                 else if (auto_list == 17)
	                     split_into_border_flower8();


	                 else if (auto_list == 18)
	                     split_into_border_flower10();


	                 else if (auto_list == 19)
	                     split_into_border_flower12();


	                 else if (auto_list == 16)
	                     split_into_border_flower10_with_centre();

	                 else if (auto_list == 20)
	                     split_into_border_flower112();

	                 else if (auto_list == 21)
	                     split_into_border_flower111();

	                 else if (auto_list == 15)
	                     split_into_border_flower10_with_centreA();







	             }

	         }




	     }/// end of loop

	 }







 function for_solid()
  {
   hollow=0;
  }



  function for_holl()
  {
  hollow =1;
  }

var listvalue_main;
 function drawing() {
    
      if (listvalue_main == 2)
          draw_patterns();

      else{
          
          draw_patternsM();
      }
	  
	  
	  }


     var r,g,b,auto=0;

   //images that binds slider 

  var cv1 = 'blue';
  var image1 = new Image()
 image1.src = "css/cupertino/images/image1.png";
 
  var image2 = new Image()
  image2.src = "css/cupertino/images/image2.png";

  var image3 = new Image()
  image3.src = "css/cupertino/images/image3.png";

  var image4 = new Image()
 image4.src = "css/cupertino/images/image4.png";
 
  var image5 = new Image()
  image5.src = "css/cupertino/images/image5.png";

  var image6 = new Image()
  image6.src = "css/cupertino/images/image6.png";

 var image7 = new Image()
 image7.src = "css/cupertino/images/image7.png";
 
  var image8 = new Image()
  image8.src = "css/cupertino/images/image8.png";

  var image9 = new Image()
  image9.src = "css/cupertino/images/image9.png";
  
    var image10 = new Image()
  image10.src = "css/cupertino/images/image10.png";


