import React ,{Component} from 'react';
import {Card ,CardImg,CardImgOverlay,CardBody,CardText,CardTitle, Container} from 'reactstrap'

   function  RenderDish({dish}){
        if (dish != null)
        return(
               <Card>
                  <CardImg width="100%"  top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
        );
        else
        return(
             <div></div>
        );
    }
   function RenderComments({dish}){
        if(dish == null){
            return (<div> </div>)
        }

        const comm = dish.comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}{","}{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short',day: '2-digit'}).format(new Date(comment.date))}</p>
                </li>
            )
        })

        return (
            <div>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {comm}
                </ul>

            </div>
        )
    }
    const DishDetail=(props)=>{
        return(
            <div className="container">
            <div className="row">

            <div  className="col-12 col-md-5 m-1">
                     <RenderDish dish={props.dish} />
              </div>

              <div className="col-12 col-md-5 m-1 ">
                      <RenderComments dish={props.dish} />
                     
              </div>


        
            </div>
            </div>

        )
    }



export default DishDetail;
  