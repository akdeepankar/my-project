import { Avatar, Card, Grid, Button, Image, Tooltip } from "@nextui-org/react";
import { a } from "./content";
import { data } from "./content";
import { useState } from 'react';




function App() {

  const [index, setIndex] = useState(0);

  let hasPrev = index > 0;
  let hasNext = index < data.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  let datalist = data[index];


  return (
    <div className="App">
      <main className=' md:pl-40 md:pr-40 bg-white px-5 pt-5 pb-5' style={{ backgroundImage:`url(${'https://nextui.org/gradient-left-dark.svg'})`, backgroundPosition: '-100px'  }}>
        <section className="pt-10 bg-yellow-300 flex justify-between">
          <h1 className='md:text-6xl text-4xl font-bold'>MySpace.</h1>
          <div className="p-2"><Button shadow color="success" auto>
          Download
        </Button></div>
          
        </section>

        <section className='md:flex pt-5 justify-evenly '>
          <div className='pt-10 flex'>
                <Card
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px", bgBlur: "#ffffff66",
                  }}>
                 <Card.Body>
                 <div className=''>
                    <Grid.Container gap={1}>
                            <Grid>
                              <Avatar
                                size="lg"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                color="primary"
                                bordered
                              />
                            </Grid>
                            <Grid>
                              <Avatar
                                size="lg"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                color="secondary"
                                bordered
                              />
                            </Grid>
                            <Grid>
                              <Avatar
                                size="lg"
                                src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                                color="success"
                                bordered
                              />
                            </Grid>
                      </Grid.Container>
                  <div className='w-82'>
                  <h1 className='md:text-2xl font-bold'>Write with Thousands Others on MySpace.</h1>
                  </div>
                  <div className='pt-2'>
                  <Button color="primary" auto>
                    Sign Up Now
                  </Button>
                  </div>
                
            </div>
            </Card.Body>
            </Card>
          </div>

          <div>
                 <div className='h-60 w-80 pt-5'>
                  <img src="pic1.png" alt=""></img>
            </div>   
          </div>   
        </section>

        <section>
        <h1 className='md:pt-32 pb-5 text-4xl text-center font-bold'>Features Like Never Before...</h1>
        </section>

        <section className=" flex justify-center">
          <img className="rounded-xl" src="pic4.avif" alt=""></img>
        </section>

        <section className='md:flex pt-10 justify-evenly'>
          <div className="p-2">
           <img alt="" className='rounded-xl h-80' src={datalist.pics}></img>
          </div>
          <div className='p-2'>
          <Card
          isHoverable
          variant="bordered"
          css={{ mw: "400px", bgBlur: "#ffffff66",
        }}>
      <Card.Body>
      <div className='w-90 h-65'>
            <h1 className='font-bold text-2xl'>{datalist.heading}</h1>
            <h1>{datalist.desc}</h1>
            <div className='flex pt-2 justify-between'>
            <Button onClick={handlePrevClick}
        disabled={!hasPrev} color="primary" auto>
              Prev
            </Button>
            <Button onClick={handleNextClick}
        disabled={!hasNext} color="primary" auto>
              Next
            </Button>
            </div>
      </div>
      </Card.Body>
      </Card>
          </div>
          
        </section>

  
        <section className="pb-5">
            <div className="pt-10 justify-center">
              <h1 className='text-4xl text-center font-bold'>Privacy at Its Peak.</h1>
              <div className="md:pl-10 pt-10 flex justify-evenly pb-5">
                <Tooltip placement="top" content="Secret No.1">
                  <Avatar
                    pointer
                    size="lg"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    color="gradient"
                    bordered
                    squared
                  />
                </Tooltip>
                <Tooltip placement="top" content="Secret No.1">
                  <Avatar
                    pointer
                    size="lg"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    color="gradient"
                    bordered
                    squared
                  />
                </Tooltip>
                <Tooltip placement="top" content="Developers love React">
                  <Avatar
                    pointer
                    size="lg"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    color="gradient"
                    bordered
                    squared
                  />
                </Tooltip>
                
              </div>
              <h1 className="text-center text-l font-semibold pt-2 ">Hey. Hover over us for Secrets.</h1>
            </div>

        </section>

        <section>
        <h1 className='text-4xl text-center font-bold pt-5'>Don't Wait Download Now!</h1>

        <div className='flex justify-between pl-2 pt-2'>

                 <div className='flex p-10'>
                    {a.map(i => {
                      return (  <Image
                      size="sm"
                      src={i}                      
                      />);
                      })}
                
                 </div>
           
            </div>
        </section>


        <section className="bg-yellow-300 pt-1">
          <h1 className="text-center text-s font-semibold">MySpace by AK DEEPANKAR</h1>
        </section>

      


      </main>
    </div>
  );
}

export default App;
