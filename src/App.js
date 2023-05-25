import { Avatar, Card, Grid, Button, Divider, Tooltip } from "@nextui-org/react";



function App() {
  return (
    <div className="App">
      <main className=' md:pl-40 md:pr-40 bg-white px-5 pt-5 pb-5' style={{ backgroundImage:`url(${'https://nextui.org/gradient-left-dark.svg'})`, backgroundPosition: '-100px'  }}>
        <section className="pt-10">
          <h1 className='md:text-6xl text-4xl font-bold'>MySpace.</h1>
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
                  <img src="https://img.freepik.com/free-vector/manager-prioritizing-tasks-list_74855-5272.jpg?w=1060&t=st=1685016458~exp=1685017058~hmac=586e3af8ac670340935f158e3530963700b5fdb65e3ca35321dfa749b799b64a" alt=""></img>
            </div>
        
          </div>
  
          
        </section>

        <section className='md:flex pt-10 justify-evenly'>
          <div className="p-2">
           <img alt="" className='rounded-xl h-80' src='https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          </div>
          <div className='p-2'>
          <Card
          isHoverable
          variant="bordered"
          css={{ mw: "400px", bgBlur: "#ffffff66",
        }}>
      <Card.Body>
      <div className='w-90 h-65'>
            <h1 className='font-bold text-2xl'>Heading</h1>
            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the </h1>
            <div className='flex pt-2 justify-between'>
            <Button color="primary" auto>
              Prev
            </Button>
            <Button color="primary" auto>
              Next
            </Button>
            </div>
      </div>
      </Card.Body>
      </Card>
          </div>
          
        </section>

        <section className="md:flex justify-evenly">
            <div className="pt-10">
              <h1 className='text-4xl font-bold'>Privacy at Its Peak.</h1>
              <div className="md:pl-10 pt-5 flex justify-between md:justify-around w-60">
                <Tooltip placement="top" content="Developers love Next.js">
                  <Avatar
                    pointer
                    size="lg"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    color="gradient"
                    bordered
                    squared
                  />
                </Tooltip>
                <Tooltip placement="top" content="Developers love Next.js">
                  <Avatar
                    pointer
                    size="lg"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    color="gradient"
                    bordered
                    squared
                  />
                </Tooltip>
                <Tooltip placement="top" content="Developers love Next.js">
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
              <h1 className="text-l font-semibold pt-2 md:pl-8">Hey. Hover over us for Secrets.</h1>
            </div>

            <div className="h-60 w-80">
            <img src="https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-2105.jpg?w=740&t=st=1685017671~exp=1685018271~hmac=d8b5263fcf35e7f063a76458a6e3cf9de39262246981357149c72dd11e89574f" alt=""></img>
            </div>
        </section>

        <section>
          <div className="pt-5">
          <h1 className='text-4xl font-bold'>Try Here</h1>
          <div className="pt-2 flex justify-around">
           
          </div>
          </div>
        </section>


      </main>
    </div>
  );
}

export default App;
