'use client'

import React, { useState } from 'react'
import { Button, Modal, Sheet, ModalClose, Typography, Input, Snackbar, colors } from '@mui/joy'
import axios from 'axios'
import { Status } from '../interfaces/interfaces';
import { useRouter } from 'next/compat/router';

function Footer() {


    const router = useRouter()

    const [modalState, setModalState] = useState<boolean>();
    const [status, setStatus] = useState<Status | null>()
    const [data, setData] = useState<string | undefined>("");



    const postBlock = async () => {

        if (!data?.trim()) {
            // alert the user to type in a value 
            setStatus({ warning: "Please Enter data( *string ) ", type: 'success' })
            return
        }

        try {

            setStatus(null)

            const response = await axios.post('http://localhost:8080/chain-add', {
                data_val: data
            }, {
                headers: {
                    'Content-Type': 'application/json', // Ensure correct Content-Type
                }
            })

            console.log(response)

            if (response.status != 200) {
                // Alert Something went wrong
            }


            setData(response.data)
            setModalState(false)

        } catch (e) {
            console.log(e)
        }
    }




    return (
        <div>


            {/*  Modal Content goes here  */}
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={modalState}
                onClose={() => setModalState(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        sx={{ fontWeight: 'lg', mb: 1 }}
                    >
                        Add your Data to the blockchain
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary" className="pb-5">
                        Submit a new block with your custom data and
                        extend the blockchain. Click the button below to add your entry to the chain and see it appear, Don't forget to refresh the page !
                    </Typography>

                    <div className='flex justify-between'>
                        <Input
                            placeholder="Type in your data ( * string )"
                            variant="soft"
                            fullWidth
                            className='mr-5'
                            onChange={(e) => setData(e.target.value)}
                        />
                        <Button
                            style={{
                                backgroundColor: 'black',
                                color: 'white'
                            }}

                            onClick={postBlock}
                        >
                            append
                        </Button>
                    </div>

                    {
                        status != null &&

                        <Snackbar
                            variant="solid"
                            style={{
                                backgroundColor: 'white',
                                color: 'black'
                            }}
                            autoHideDuration={3000} // Example duration, adjust as needed
                            open={status !== null}
                            onClose={() => setStatus(null)}
                        >
                            <p className='font-medium'>{status?.warning}</p>
                        </Snackbar>
                    }
                </Sheet>
            </Modal>




            {/* Add Block To Chain button */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <footer className="m-10 w-300" >
                    <Button fullWidth onClick={() => setModalState(true)} style={{ backgroundColor: 'white', color: 'black' }}>
                        Add Block To Chain
                    </Button>
                </footer>
            </div>
        </div>
    )
}

export default Footer