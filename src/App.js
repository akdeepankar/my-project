import { Avatar, Card, Grid, Button, Image, Tooltip, Spacer, Text } from "@nextui-org/react";
import { a, features, tooltip, data, icons, testimonial } from "./content";
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
          <div>
          <Text className='md:text-6xl text-4xl font-bold'>MySpace.</Text>
          </div>
          <div className="md:pt-8 md:pr-5 pr-2 pt-3 font-mono font-semibold">
          <Text>Your Daily App.</Text>
          </div>     
        </section>

        {/* Main Page */}

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
                      {icons.map(i => {
                        return (
                          <>
                          <Grid>
                              <Avatar
                                size="lg"
                                src={i.src}
                                color={i.color}
                                bordered
                              />
                            </Grid>
                          </>
                        )
                      })}
                    </Grid.Container>
                  <div className='w-82'>
                  <Text className='md:text-2xl font-bold'>Write with Thousands Others on MySpace.</Text>
                  </div>
                  <div className='pt-2'>
                  <Button color="success" auto>
                    Downlod Now
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

        {/* Features */}

        <section className=" md:pt-10">
        <Text className='md:pt-32 pt-24 pb-5 md:text-4xl text-2xl text-center font-bold'>Features Like Never Before...</Text>
        </section>

        <section className="flex overflow-x-auto md:justify-center md:pt-10">
          {features.map( i => {
            return (
              <>
              <img className="rounded-xl h-44 " src={i} alt=""></img>
              <Spacer y={1} />  
              </>
            )
          })}
          
        </section>

        {/* Rendering Data */}

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
                <Text className='font-bold text-2xl'>{datalist.heading}</Text>
                <Text>{datalist.desc}</Text>
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

        {/* Privacy */}

        <section className="pb-5 md:pt-40 md:pb-40">
            <div className="pt-10 justify-center">
              <div className="md:pl-10 pt-10 flex justify-evenly pb-5">
                {tooltip.map(i => {
                  return (
                    <>
                          <Tooltip placement="top" content={i.content}>
                          <Avatar
                            pointer
                            size="lg"
                            src={i.src}
                            color="gradient"
                            bordered
                            squared
                          />
                          </Tooltip>
                    </>
                  )
                })}          
              </div>
              <Text className="text-center text-l font-semibold md:pt-10 ">Hey. Hover over us for Secrets.</Text>
              <Text className='text-4xl text-center font-bold'>Privacy at Its Peak.</Text>
            </div>
        </section>

        {/* Banner */}
        
        <section className="md:pt-5 md:pb-20">
          <img className="rounded-xl" src="banner.png" alt=""></img>
        </section>

        {/* Testimonials */}

        <section>
        <Text className='text-4xl text-center font-bold pt-5'>Testimonials</Text>
        <div className="pt-5 md:flex">
          {testimonial.map(i => {
            return (
              <>
          <Card css={{ p: "$6", mw: "400px" }}>
          <Card.Header>
          <img
            alt="logo"
            src={i.logo}
            width="34px"
            height="34px"
            className="rounded-2xl"
          />
          <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {i.name}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{i.city}</Text>
          </Grid>
          </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
          <Text>
           {i.review}
          </Text>
          </Card.Body>
          </Card>
          <Spacer/>
          </>
            )
          })}
        </div>
        </section>

        {/* Footer Alert Section */}

        <section>
        <h1 className='text-4xl text-center font-bold md:pt-20 pt-10'>Don't Wait Download Now!</h1>
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

        {/* Footer */}

        <section className="bg-yellow-300 pt-1">
          <Text className="text-center text-s font-semibold">MySpace by AK DEEPANKAR</Text>
        </section>

      </main>
    </div>
  );
}

export default App;
