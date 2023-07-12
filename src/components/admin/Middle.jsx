"use client"
import React, { use, useEffect, useState } from 'react'
import AdminVideo from './AdminVideo'
import DeleteVideo from './DeleteVideo'

export default function Middle({toggle}) {


  return (
    <main className="flex-1">
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4">
          
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" >
            <AdminVideo />
            </div>
          
        </div>
     
          {toggle && toggle ==="user" ? (
            <div className="py-4 text-slate-900">user</div>
          ) : (
            null
          )}
      </div>
    </div>
    <DeleteVideo />
  </main>
  )
}
